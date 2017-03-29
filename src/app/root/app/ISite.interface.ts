export interface ISite {
    site: string,
    caseNumber: string,
    auth0: {
        secret: string,
        domain: string,
        client: string
    }
}