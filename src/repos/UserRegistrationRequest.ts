export interface UserRegistrationRequest {
    requestMetadata :RequestMetadata,
    requestPayload :RequestPayload,
}

export interface RequestMetadata {
    requestId: string,
    sourceSystemId: string
}
export interface RequestPayload {
    name:string,
    email: string,
    domain:string
}