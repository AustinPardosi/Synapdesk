export function getOrganizationById(client: Client, organizationId: number) {
  return client
    .from("organizations")
    .select(
      `
        id,
        name,
        logoURL: logo_url
      `
    )
    .eq("id", organizationId)
    .throwOnError()
    .single();
}
