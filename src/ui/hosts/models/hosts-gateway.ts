import Host from "./host";

export default interface HostsGateway {
    load(): Promise<Host[]>
    save(hosts: Host[]): Promise<void>
}