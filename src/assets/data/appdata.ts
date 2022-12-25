import {MenuType} from '../../types/menu.type'
import { AnalyticsIcon, HomeIcon, NotificationIcon, PeopleIcon, ProfileIcon, QuestionIcon, ReferIcon, SettingsIcon, TransactionIcon, WalletIcon } from './svg-icon'

export const menuNavData: MenuType = {
  'primary': [
    {
      title: 'Home',
      to: '/',
      Icon: HomeIcon,
    },
    {
      title: 'Wallet',
      to: '/wallet',
      Icon: WalletIcon,
    },
    {
      title: 'Transactions',
      to: '/transaction',
      Icon: TransactionIcon,
    },
    {
      title: 'Beneficiaries',
      to: '/beneficiaries',
      Icon: PeopleIcon,
    },
    {
      title: 'Analytics',
      to: '/analytics',
      Icon: AnalyticsIcon,
    }
  ],
  'secondary': [
    {
      title: 'Profile Info',
      to: '/profile',
      Icon: ProfileIcon,
    },
    {
      title: 'Notifications',
      to: '/notification',
      Icon: NotificationIcon,
    },
    {
      title: 'Settings',
      to: '/setting',
      Icon: SettingsIcon,
    }
  ],
  'tertiary': [
    {
      title: 'Refer a friend',
      to: '/refer',
      Icon: ReferIcon,
    },
    {
      title: 'Help & Support',
      to: '/help',
      Icon: QuestionIcon,
    }
  ]
}
