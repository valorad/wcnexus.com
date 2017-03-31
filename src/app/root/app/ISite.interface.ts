export interface ISite {
    site: string,
    caseNumber: string,
    auth0: {
        domain: string,
        client: string
    }
}