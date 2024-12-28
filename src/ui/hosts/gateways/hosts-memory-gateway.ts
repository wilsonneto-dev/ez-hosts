import HostsGateway from "../models/hosts-gateway"
import Host from "../models/host"

class HostsMemoryGateway implements HostsGateway {
    private hosts: Host[] | null = null;

    async load(): Promise<Host[]> {
        if (this.hosts == null)
            this.hosts =exampleHosts
        return Promise.resolve(this.hosts)
    }

    async save(hosts: Host[]): Promise<void> {
        this.hosts = hosts;
        return Promise.resolve()
    }
}

const exampleHosts = [
    {description: "Host A", ip: "192.168.0.1", domain: "local.test.com", isActive: true},
    {description: "Host B", ip: "192.168.0.1", domain: "local.test.com", isActive: true},
    {description: "Host C", ip: "192.168.0.1", domain: "local.test.com", isActive: true}
]

const hostsMemoryGateway = new HostsMemoryGateway()

export default hostsMemoryGateway