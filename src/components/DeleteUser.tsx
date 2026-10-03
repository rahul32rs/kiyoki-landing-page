import { ArrowLeft, UserMinus, Mail, AlertTriangle } from 'lucide-react';
import { KiyokiLogo } from './KiyokiLogo';

interface DeleteUserProps {
  onBackToHome: () => void;
}

export function DeleteUser({ onBackToHome }: DeleteUserProps) {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-6 lg:px-12 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100 flex flex-col">
        {/* Header Area */}
        <div className="bg-sky-950 p-8 text-white relative">
          <div className="flex items-center justify-between mb-8">
            <div className="h-8">
              <KiyokiLogo variant="white" height={32} />
            </div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-sm text-sky-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center shrink-0 border border-sky-800">
              <UserMinus className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Account Deletion</h1>
              <p className="text-sky-200 mt-2 text-sm sm:text-base">
                Manage your data and request account removal
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 sm:p-10 text-slate-700 space-y-8">
          
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4 text-amber-900 text-sm leading-relaxed">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <div>
              <strong>Important Notice:</strong> Deleting your account is a permanent action. All your saved preferences, order history, and personal data will be completely erased from our servers within 30 days and cannot be recovered.
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-bold">1</span>
              Delete from your Profile (Recommended)
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">
              The fastest way to delete your account and associated data is directly through the Kiyoki App or website portal.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-100 list-inside">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                Log in to your account on the Kiyoki App or website.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                Navigate to <strong>Settings</strong> &gt; <strong>Account Profile</strong>.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                Scroll to the bottom and select <strong>"Delete My Account"</strong>.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                Follow the on-screen prompts to confirm deletion.
              </li>
            </ul>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-bold">2</span>
              Request Deletion via Email
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">
              If you no longer have access to the app, you can request manual account deletion by contacting our support team.
            </p>
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
              <div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Email Support Team</div>
                <a href="mailto:support@kiyoki.in?subject=Account%20Deletion%20Request" className="text-xl sm:text-2xl font-medium hover:text-sky-400 transition-colors flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sky-500" />
                  support@kiyoki.in
                </a>
              </div>
              <a 
                href="mailto:support@kiyoki.in?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Kiyoki%20account%20associated%20with%20this%20email."
                className="bg-white text-slate-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-50 transition-colors whitespace-nowrap"
              >
                Send Request
              </a>
            </div>
            
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              * Please ensure you send the email from the address associated with your Kiyoki account so we can verify your identity. Manual requests may take up to 7 business days to process.
            </p>
          </section>

        </div>
        
        {/* Footer Area */}
        <div className="bg-slate-100 px-8 py-5 text-xs text-slate-500 text-center border-t border-slate-200 mt-auto">
          &copy; {new Date().getFullYear()} Kiyoki Private Limited. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
