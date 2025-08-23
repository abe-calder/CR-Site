export interface ClashBattleLog {
    type:                 Type;
    battleTime:           string;
    isLadderTournament:   boolean;
    arena:                Arena;
    gameMode:             Arena;
    deckSelection:        DeckSelection;
    team:                 Opponent[];
    opponent:             Opponent[];
    isHostedMatch:        boolean;
    leagueNumber:         number;
    boatBattleSide?:      BoatBattleSide;
    boatBattleWon?:       boolean;
    newTowersDestroyed?:  number;
    prevTowersDestroyed?: number;
    remainingTowers?:     number;
}

export interface Arena {
    id:   number;
    name: ArenaName;
}

export enum ArenaName {
    CWBattle1V1 = "CW_Battle_1v1",
    ClanWarBoatBattle = "ClanWar_BoatBattle",
    Ladder = "Ladder",
    LegendaryArena = "Legendary Arena",
    SeasonalArena3 = "Seasonal Arena 3",
    The7XElixirLadder = "7xElixir_Ladder",
}

export enum BoatBattleSide {
    Defender = "defender",
}

export enum DeckSelection {
    Collection = "collection",
}

export interface Opponent {
    tag:                     string;
    name:                    string;
    startingTrophies?:       number;
    trophyChange?:           number;
    crowns:                  number;
    kingTowerHitPoints:      number;
    princessTowersHitPoints: number[] | null;
    clan?:                   Clan;
    cards:                   Card[];
    supportCards:            SupportCard[];
    globalRank:              null;
    elixirLeaked:            number;
}

export interface Card {
    name:               string;
    id:                 number;
    level:              number;
    starLevel?:         number;
    evolutionLevel?:    number;
    maxLevel:           number;
    maxEvolutionLevel?: number;
    rarity:             Rarity;
    elixirCost?:        number;
    iconUrls:           CardIconUrls;
}

export interface CardIconUrls {
    medium:           string;
    evolutionMedium?: string;
}

export enum Rarity {
    Champion = "champion",
    Common = "common",
    Epic = "epic",
    Legendary = "legendary",
    Rare = "rare",
}

export interface Clan {
    tag:     string;
    name:    string;
    badgeId: number;
}

export interface SupportCard {
    name:     SupportCardName;
    id:       number;
    level:    number;
    maxLevel: number;
    rarity:   Rarity;
    iconUrls: SupportCardIconUrls;
}

export interface SupportCardIconUrls {
    medium: string;
}

export enum SupportCardName {
    Cannoneer = "Cannoneer",
    DaggerDuchess = "Dagger Duchess",
    RoyalChef = "Royal Chef",
    TowerPrincess = "Tower Princess",
}

export enum Type {
    BoatBattle = "boatBattle",
    RiverRacePVP = "riverRacePvP",
    Trail = "trail",
}


// console.log(battleLog[0].team.map((tt) => {
//     const tc = tt.trophyChange
//     if (tc < 0) {
//       return 0
//     } else {
//       return 1
//     }
// }))