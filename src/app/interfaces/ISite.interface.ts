export interface ISite {
    site: string,
    caseNumber: string,
    link: string,
    auth0: {
        domain: string,
        client: string
    }
}