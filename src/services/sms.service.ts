import { functions } from '../config/firebase';
import { httpsCallable } from 'firebase/functions';

interface SMSData {
  to: string;
  body: string;
}

interface PairingSMSData {
  toPhone: string;
  fromName: string;
  pairingCode: string;
  message?: string;
}

class SMSService {
  // Send pairing invitation via SMS
  async sendPairingInviteSMS(data: PairingSMSData): Promise<void> {
    try {
      const sendSMS = httpsCallable(functions, 'sendPairingInviteSMS');
      
      const smsData = {
        toPhone: data.toPhone,
        fromName: data.fromName,
        pairingCode: data.pairingCode,
        message: data.message || '',
        appUrl: window.location.origin
      };

      const result = await sendSMS(smsData);
      
      if (!(result.data as any).success) {
        throw new Error('Failed to send SMS invitation');
      }
    } catch (error: any) {
      console.error('SMS send error:', error);
      throw new Error(`Failed to send SMS invitation: ${error.message}`);
    }
  }

  // Send mutual pairing confirmation code via SMS
  async sendMutualPairingCode(phone: string, code: string, partnerName: string): Promise<void> {
    try {
      const sendSMS = httpsCallable(functions, 'sendMutualPairingCode');
      
      await sendSMS({
        toPhone: phone,
        code,
        partnerName
      });
    } catch (error: any) {
      console.error('SMS send error:', error);
      throw new Error(`Failed to send confirmation code: ${error.message}`);
    }
  }

  // Send weekly reminder via SMS
  async sendWeeklyReminderSMS(phone: string, partnerName: string, weekNumber: number): Promise<void> {
    try {
      const sendSMS = httpsCallable(functions, 'sendWeeklyReminderSMS');
      
      await sendSMS({
        toPhone: phone,
        partnerName,
        weekNumber
      });
    } catch (error: any) {
      console.error('SMS reminder error:', error);
      // Don't throw - reminders are non-critical
    }
  }

  // Send game results via SMS
  async sendGameResultsSMS(phone: string, score: number, correctGuesses: number): Promise<void> {
    try {
      const sendSMS = httpsCallable(functions, 'sendGameResultsSMS');
      
      await sendSMS({
        toPhone: phone,
        score,
        correctGuesses
      });
    } catch (error: any) {
      console.error('SMS results error:', error);
      // Don't throw - notifications are non-critical
    }
  }

  // Format phone number to E.164 format
  formatPhoneNumber(phone: string): string {
    // Remove all non-numeric characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Add country code if not present (assuming US)
    if (cleaned.length === 10) {
      cleaned = '1' + cleaned;
    }
    
    // Add + prefix
    if (!cleaned.startsWith('+')) {
      cleaned = '+' + cleaned;
    }
    
    return cleaned;
  }

  // Validate phone number
  isValidPhoneNumber(phone: string): boolean {
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's a valid US phone number (10 or 11 digits)
    return cleaned.length === 10 || cleaned.length === 11;
  }
}

export const smsService = new SMSService();