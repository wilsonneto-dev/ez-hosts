import Host from "../../models/host";
import {useEffect, useState} from "react";
import hostsMemoryGateway from "../../gateways/hosts-memory-gateway";
import Card from "../../../shared/components/card/card";

const List = () => {
  const [hosts, setHosts] = useState<Host[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    hostsMemoryGateway.load().then(hosts => {
      setHosts(hosts)
      setIsLoading(false)
    })
  }, [])

  return <div>
    {isLoading && <div>Loading...</div>}

    {!isLoading && <div>
      {hosts.map(host => <Card>{host.domain} = {host.ip}</Card>)}
    </div>}

  </div>
}

export default List
