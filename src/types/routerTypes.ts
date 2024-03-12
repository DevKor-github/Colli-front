declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Splash: undefined
  Main: undefined
  Team: undefined
  TeamMember: undefined
  LogIn: undefined
  Landing: undefined
  NewTeam: undefined
}
