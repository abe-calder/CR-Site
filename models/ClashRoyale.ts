export interface ClashRoyale {
  // [x: string]: any
  tag: string
  name: string
  expLevel: number
  trophies: number
  bestTrophies: number
  wins: number
  losses: number
  battleCount: number
  threeCrownWins: number
  challengeCardsWon: number
  challengeMaxWins: number
  tournamentCardsWon: number
  tournamentBattleCount: number
  role: string
  donations: number
  donationsReceived: number
  totalDonations: number
  warDayWins: number
  clanCardsCollected: number
  clan: Clan
  arena: Arena
  leagueStatistics: LeagueStatistics
  badges: Badge[]
  achievements: Achievement[]
  cards: Card[]
  supportCards: SupportCard[]
  currentDeck: Card[]
  currentDeckSupportCards: SupportCard[]
  currentFavouriteCard: CurrentFavouriteCard
  starPoints: number
  expPoints: number
  legacyTrophyRoadHighScore: number
  currentPathOfLegendSeasonResult: TPathOfLegendSeasonResult
  lastPathOfLegendSeasonResult: TPathOfLegendSeasonResult
  bestPathOfLegendSeasonResult: TPathOfLegendSeasonResult
  progress: Progress
  totalExpPoints: number
}

export interface Achievement {
  name: string
  stars: number
  value: number
  target: number
  info: string
  completionInfo: null
}

export interface Arena {
  id: number
  name: string
}

export interface Badge {
  name: string
  level: number
  maxLevel: number
  progress: number
  target?: number
  iconUrls: BadgeIconUrls
}

export interface BadgeIconUrls {
  large: string
}

export interface TPathOfLegendSeasonResult {
  leagueNumber: number
  trophies: number
  rank: null
}

export interface Card {
  name: string
  id: number
  level: number
  starLevel?: number
  maxLevel: number
  rarity: Rarity
  count: number
  elixirCost?: number
  iconUrls: CardIconUrls
  maxEvolutionLevel?: number
  evolutionLevel?: number
}

export interface CardIconUrls {
  medium: string
  evolutionMedium?: string
}

export enum Rarity {
  Champion = 'champion',
  Common = 'common',
  Epic = 'epic',
  Legendary = 'legendary',
  Rare = 'rare',
}

export interface Clan {
  tag: string
  name: string
  badgeId: number
}

export interface SupportCard {
  name: string
  id: number
  level: number
  maxLevel: number
  rarity: Rarity
  count: number
  iconUrls: CurrentDeckSupportCardIconUrls
}

export interface CurrentDeckSupportCardIconUrls {
  medium: string
}

export interface CurrentFavouriteCard {
  name: string
  id: number
  maxLevel: number
  elixirCost: number
  iconUrls: CurrentDeckSupportCardIconUrls
  rarity: Rarity
}

export interface LeagueStatistics {
  currentSeason: CurrentSeason
  previousSeason: PreviousSeason
  bestSeason: BestSeason
}

export interface BestSeason {
  id: string
  trophies: number
}

export interface CurrentSeason {
  trophies: number
}

export interface PreviousSeason {
  id: string
  trophies: number
  bestTrophies: number
}

export interface Progress {
  AutoChess: AutoChess
  'seasonal-trophy-road-202508': AutoChess
}

export interface AutoChess {
  arena: Arena
  trophies: number
  bestTrophies: number
}
