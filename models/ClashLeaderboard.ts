export interface ClashLeaderboard {
    items:  Item[];
    paging: Paging;
}

export interface Item {
    tag:   string;
    name:  string;
    rank:  number;
    score: number;
    clan?: Clan;
}

export interface Clan {
    tag:     string;
    name:    string;
    badgeId: number;
}

export interface Paging {
    cursors: Cursors;
}

export interface Cursors {
    after: string;
}