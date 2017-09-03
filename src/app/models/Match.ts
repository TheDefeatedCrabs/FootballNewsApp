export interface Match {
    start: number;
    homeTeam: {
        name?: string;
        defaultHomeVenue?: string;
        dbid: number;
        isNational: boolean;
        shortName?: string;
    };
    homeGoals: number;
    awayTeam: {
        name?: string;
        defaultHomeVenue?: string;
        dbid: number;
        isNational: boolean;
        shortName?: string;
    };
    awayGoals: number;
}
