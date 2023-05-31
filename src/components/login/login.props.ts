export interface LoginProps {
    onNavigateStateComponent: (component: 'login' | 'register' | 'verification' | 'account-recovery') => void;
}