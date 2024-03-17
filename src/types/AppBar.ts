export interface AppBarProps {
  handleNavigation: () => void
}

export interface AppBarWithCalendarProps extends AppBarProps {
  teamName: string
}
