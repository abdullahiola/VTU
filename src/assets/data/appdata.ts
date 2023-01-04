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
      to: '/transactions',
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
      to: '/notifications',
      Icon: NotificationIcon,
    },
    {
      title: 'Settings',
      to: '/settings',
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

export const userData = {
  "favorites": [
    {
      "name": "Me",
      "number": "08115716657",
      "color": "#6B82B0"
    },
    {
      "name": "Dino Onyemere",
      "number": "08115716657",
      "color": "#37C779"
    },
    {
      "name": "Isa Abdukhalid",
      "number": "08115716657",
      "color": "#8E97FD"
    },
    {
      "name": "Collins Chinedu",
      "number": "08115716657",
      "color": "#6B82B0"
    },
    {
      "name": "Sikiru Abdullahi",
      "number": "08115716657",
      "color": "#EFC218"
    },
    {
      "name": "Seun Oladele",
      "number": "08115716657",
      "color": "#FF3434"
    },
  ]
}
