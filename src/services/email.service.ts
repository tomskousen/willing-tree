import { functions } from '../config/firebase';
import { httpsCallable } from 'firebase/functions';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

interface PairingInviteData {
  toEmail: string;
  fromName: string;
  pairingCode: string;
  message?: string;
}

class EmailService {
  // Send pairing invitation email
  async sendPairingInvite(data: PairingInviteData): Promise<void> {
    try {
      const sendEmail = httpsCallable(functions, 'sendPairingInvite');
      
      const emailData = {
        toEmail: data.toEmail,
        fromName: data.fromName,
        pairingCode: data.pairingCode,
        message: data.message || '',
        appUrl: window.location.origin
      };

      const result = await sendEmail(emailData);
      
      if (!(result.data as any).success) {
        throw new Error('Failed to send invitation email');
      }
    } catch (error: any) {
      console.error('Email send error:', error);
      throw new Error(`Failed to send invitation: ${error.message}`);
    }
  }

  // Send weekly reminder
  async sendWeeklyReminder(userId: string, partnerName: string): Promise<void> {
    try {
      const sendReminder = httpsCallable(functions, 'sendWeeklyReminder');
      
      await sendReminder({
        userId,
        partnerName,
        weekNumber: this.getCurrentWeekNumber()
      });
    } catch (error: any) {
      console.error('Reminder send error:', error);
      // Don't throw - reminders are non-critical
    }
  }

  // Send guess results notification
  async sendGuessResults(userId: string, score: number, correctGuesses: number): Promise<void> {
    try {
      const sendResults = httpsCallable(functions, 'sendGuessResults');
      
      await sendResults({
        userId,
        score,
        correctGuesses,
        weekNumber: this.getCurrentWeekNumber()
      });
    } catch (error: any) {
      console.error('Results send error:', error);
      // Don't throw - notifications are non-critical
    }
  }

  // Send password reset email (handled by Firebase Auth, but we can trigger custom template)
  async sendCustomPasswordReset(email: string): Promise<void> {
    try {
      const sendReset = httpsCallable(functions, 'sendCustomPasswordReset');
      
      await sendReset({ email });
    } catch (error: any) {
      console.error('Password reset error:', error);
      throw new Error(`Failed to send password reset: ${error.message}`);
    }
  }

  // Send 2FA setup confirmation
  async send2FAConfirmation(userId: string): Promise<void> {
    try {
      const send2FA = httpsCallable(functions, 'send2FAConfirmation');
      
      await send2FA({ userId });
    } catch (error: any) {
      console.error('2FA confirmation error:', error);
      // Don't throw - confirmation is non-critical
    }
  }

  // Helper function
  private getCurrentWeekNumber(): number {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek) + 1;
  }
}

export const emailService = new EmailService();