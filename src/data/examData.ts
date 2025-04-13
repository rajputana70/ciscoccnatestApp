export interface Question {
  id: number;
  domain: string;
  text: string;
  options: string[];
  correctAnswers: number[];
  explanation: string;
  isMultipleChoice: boolean;
  image?: string;
  exhibitType?: 'network' | 'config' | 'output';
}

export interface Domain {
  id: string;
  name: string;
  percentage: number;
}

export const domains: Domain[] = [
  { id: 'network-fundamentals', name: 'Network Fundamentals', percentage: 20 },
  { id: 'network-access', name: 'Network Access', percentage: 20 },
  { id: 'ip-connectivity', name: 'IP Connectivity', percentage: 25 },
  { id: 'ip-services', name: 'IP Services', percentage: 10 },
  { id: 'security-fundamentals', name: 'Security Fundamentals', percentage: 15 },
  { id: 'automation-programmability', name: 'Automation and Programmability', percentage: 10 }
];

export const questions: Question[] = [
  {
    id: 1,
    domain: 'network-fundamentals',
    text: 'Which layer of the OSI model is responsible for path determination and logical addressing?',
    options: [
      'Data Link Layer',
      'Transport Layer',
      'Network Layer',
      'Session Layer'
    ],
    correctAnswers: [2],
    explanation: 'The Network Layer (Layer 3) is responsible for logical addressing and path determination using IP addresses.',
    isMultipleChoice: false
  },
  {
    id: 2,
    domain: 'network-fundamentals',
    text: 'Which protocol is used to convert IP addresses to MAC addresses?',
    options: [
      'DNS',
      'RARP',
      'DHCP',
      'ARP'
    ],
    correctAnswers: [3],
    explanation: 'ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses in a local network.',
    isMultipleChoice: false
  },
  {
    id: 3,
    domain: 'network-fundamentals',
    text: 'What is the default subnet mask for a Class B IP address?',
    options: [
      '255.255.255.0',
      '255.255.0.0',
      '255.0.0.0',
      '255.255.255.255'
    ],
    correctAnswers: [1],
    explanation: 'Class B IP addresses range from 128.0.0.0 to 191.255.255.255 and use a default subnet mask of 255.255.0.0.',
    isMultipleChoice: false
  },
  {
    id: 4,
    domain: 'network-fundamentals',
    text: 'Which protocol is used to assign IP addresses dynamically to devices?',
    options: [
      'DNS',
      'SNMP',
      'DHCP',
      'NAT'
    ],
    correctAnswers: [2],
    explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configurations to devices.',
    isMultipleChoice: false
  },
  {
    id: 5,
    domain: 'network-fundamentals',
    text: 'Which address type is used for one-to-many communication?',
    options: [
      'Unicast',
      'Broadcast',
      'Multicast',
      'Anycast'
    ],
    correctAnswers: [2],
    explanation: 'Multicast addresses are used for one-to-many communication, where a message is sent to multiple but specific recipients.',
    isMultipleChoice: false
  },
  {
    id: 6,
    domain: 'network-fundamentals',
    text: 'Which of the following are characteristics of TCP? (Choose all that apply)',
    options: [
      'Connectionless',
      'Reliable delivery',
      'Flow control',
      'Sequencing'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'TCP is connection-oriented and provides reliable delivery, sequencing, and flow control.',
    isMultipleChoice: true
  },
  {
    id: 7,
    domain: 'network-fundamentals',
    text: 'What is the primary purpose of a default gateway?',
    options: [
      'To assign IP addresses to devices',
      'To forward packets to remote networks',
      'To translate IP addresses to MAC addresses',
      'To monitor network performance'
    ],
    correctAnswers: [1],
    explanation: 'The default gateway forwards packets from a local network to devices on remote networks.',
    isMultipleChoice: false
  },
  {
    id: 8,
    domain: 'network-fundamentals',
    text: 'Which command displays the current IP configuration on a Windows machine?',
    options: [
      'ping',
      'ipconfig',
      'tracert',
      'netstat'
    ],
    correctAnswers: [1],
    explanation: '`ipconfig` is used on Windows to display IP address, subnet mask, and default gateway information.',
    isMultipleChoice: false
  },
  {
    id: 9,
    domain: 'network-fundamentals',
    text: 'What is the function of a DNS server?',
    options: [
      'To provide IP address configuration',
      'To map MAC addresses to IP addresses',
      'To translate domain names to IP addresses',
      'To monitor network performance'
    ],
    correctAnswers: [2],
    explanation: 'DNS (Domain Name System) translates domain names (like google.com) into IP addresses.',
    isMultipleChoice: false
  },
  {
    id: 10,
    domain: 'network-fundamentals',
    text: 'Which of the following are examples of Layer 1 devices? (Choose all that apply)',
    options: [
      'Repeater',
      'Switch',
      'Hub',
      'Router'
    ],
    correctAnswers: [0, 2],
    explanation: 'Repeaters and hubs operate at Layer 1 (Physical Layer) and do not interpret data at higher layers.',
    isMultipleChoice: true
  },
  {
    id: 11,
    domain: 'network-fundamentals',
    text: 'Which protocol is responsible for error reporting and diagnostic functions like ping?',
    options: [
      'ICMP',
      'TCP',
      'ARP',
      'DNS'
    ],
    correctAnswers: [0],
    explanation: 'ICMP (Internet Control Message Protocol) handles diagnostic tasks like echo requests used in ping.',
    isMultipleChoice: false
  },
  {
    id: 12,
    domain: 'network-fundamentals',
    text: 'Which IP address class provides the largest number of host addresses?',
    options: [
      'Class A',
      'Class B',
      'Class C',
      'Class D'
    ],
    correctAnswers: [0],
    explanation: 'Class A networks support 16 million+ hosts per network due to their large host bit count.',
    isMultipleChoice: false
  },
  {
    id: 13,
    domain: 'network-fundamentals',
    text: 'Which of the following are private IP addresses? (Choose all that apply)',
    options: [
      '192.168.1.1',
      '172.32.0.1',
      '10.0.0.1',
      '8.8.8.8'
    ],
    correctAnswers: [0, 2],
    explanation: 'Private IP ranges include 10.0.0.0/8, 172.16.0.0–172.31.255.255, and 192.168.0.0/16.',
    isMultipleChoice: true
  },
  {
    id: 14,
    domain: 'network-fundamentals',
    text: 'Which transport layer protocol is used for streaming video and voice?',
    options: [
      'TCP',
      'UDP',
      'ICMP',
      'FTP'
    ],
    correctAnswers: [1],
    explanation: 'UDP is preferred for real-time data (voice/video) due to its low-latency, connectionless nature.',
    isMultipleChoice: false
  },
  {
    id: 15,
    domain: 'network-fundamentals',
    text: 'What device breaks up collision domains in a network?',
    options: [
      'Hub',
      'Switch',
      'Router',
      'Bridge'
    ],
    correctAnswers: [1],
    explanation: 'Switches create separate collision domains per port, reducing the chance of collisions.',
    isMultipleChoice: false
  },
  {
    id: 16,
    domain: 'network-fundamentals',
    text: 'What is the purpose of subnetting?',
    options: [
      'To increase the broadcast domain size',
      'To eliminate the need for routers',
      'To divide a large network into smaller networks',
      'To reduce the number of switches required'
    ],
    correctAnswers: [2],
    explanation: 'Subnetting divides larger networks into smaller, manageable sub-networks.',
    isMultipleChoice: false
  },
  {
    id: 17,
    domain: 'network-fundamentals',
    text: 'Which of the following protocols uses port 53?',
    options: [
      'HTTP',
      'DNS',
      'FTP',
      'SMTP'
    ],
    correctAnswers: [1],
    explanation: 'DNS uses port 53 for both TCP and UDP communication.',
    isMultipleChoice: false
  },
  {
    id: 18,
    domain: 'network-fundamentals',
    text: 'Which command tests connectivity by sending ICMP Echo Requests?',
    options: [
      'traceroute',
      'netstat',
      'ping',
      'nslookup'
    ],
    correctAnswers: [2],
    explanation: 'The `ping` command tests connectivity using ICMP Echo Requests.',
    isMultipleChoice: false
  },
  {
    id: 19,
    domain: 'network-fundamentals',
    text: 'What is the loopback IP address used for testing local network stack?',
    options: [
      '0.0.0.0',
      '192.168.0.1',
      '127.0.0.1',
      '255.255.255.255'
    ],
    correctAnswers: [2],
    explanation: '127.0.0.1 is the loopback address used to test a device’s own TCP/IP stack.',
    isMultipleChoice: false
  },
  {
    id: 20,
    domain: 'network-fundamentals',
    text: 'Which of the following are Layer 2 protocols? (Choose all that apply)',
    options: [
      'Ethernet',
      'PPP',
      'IP',
      'Frame Relay'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Ethernet, PPP, and Frame Relay operate at Layer 2. IP is a Layer 3 protocol.',
    isMultipleChoice: true
  },
  {
    id: 21,
    domain: 'network-access',
    text: 'What is the function of the command "switchport mode access" on a switch interface?',
    options: [
      'Enables trunking on the interface',
      'Disables the interface',
      'Sets the interface as an access port',
      'Allows dynamic negotiation of trunking'
    ],
    correctAnswers: [2],
    explanation: 'The "switchport mode access" command forces the interface to be an access port, which is used for end devices and does not carry VLAN tagging.',
    isMultipleChoice: false
  },
  {
    id: 22,
    domain: 'network-access',
    text: 'Which IEEE standard defines VLAN tagging for trunk links?',
    options: [
      '802.11',
      '802.1D',
      '802.3af',
      '802.1Q'
    ],
    correctAnswers: [3],
    explanation: 'IEEE 802.1Q is the standard that defines VLAN tagging on Ethernet frames for trunk links.',
    isMultipleChoice: false
  },
  {
    id: 23,
    domain: 'network-access',
    text: 'What does a switch do when it receives a frame on an access port tagged with a VLAN ID?',
    options: [
      'It forwards the frame normally',
      'It drops the frame',
      'It forwards the frame to the native VLAN',
      'It converts the frame to untagged and forwards'
    ],
    correctAnswers: [1],
    explanation: 'Tagged frames on access ports are not expected; the switch drops such frames since access ports are supposed to carry untagged traffic.',
    isMultipleChoice: false
  },
  {
    id: 24,
    domain: 'network-access',
    text: 'Which of the following are characteristics of access ports? (Choose all that apply)',
    options: [
      'Carries traffic for one VLAN only',
      'Used to connect end-user devices',
      'Tags VLAN traffic with 802.1Q',
      'Can be part of a trunk link'
    ],
    correctAnswers: [0, 1],
    explanation: 'Access ports carry traffic for a single VLAN and are typically connected to end-user devices. Trunking and tagging are not used on access ports.',
    isMultipleChoice: true
  },
  {
    id: 25,
    domain: 'network-access',
    text: 'Which command displays VLAN membership on a Cisco switch?',
    options: [
      'show interfaces',
      'show vlan brief',
      'show ip interface brief',
      'show mac address-table'
    ],
    correctAnswers: [1],
    explanation: '"show vlan brief" displays VLANs configured on the switch and the interfaces assigned to each.',
    isMultipleChoice: false
  },
  {
    id: 26,
    domain: 'network-access',
    text: 'What protocol is used to negotiate trunking on a link between two Cisco switches?',
    options: [
      'VTP',
      'DTP',
      'CDP',
      'STP'
    ],
    correctAnswers: [1],
    explanation: 'Dynamic Trunking Protocol (DTP) is used to automatically negotiate trunking between two Cisco switches.',
    isMultipleChoice: false
  },
  {
    id: 27,
    domain: 'network-access',
    text: 'Which of the following are valid VLAN IDs in a standard VLAN range? (Choose all that apply)',
    options: [
      '0',
      '1',
      '1005',
      '4095'
    ],
    correctAnswers: [1, 2],
    explanation: 'Valid standard VLANs range from 1 to 1005. VLAN 0 and 4095 are reserved and not usable.',
    isMultipleChoice: true
  },
  {
    id: 28,
    domain: 'network-access',
    text: 'In VLAN configuration, what is the native VLAN used for?',
    options: [
      'To identify default gateway',
      'To carry untagged traffic across trunk links',
      'To encrypt VLAN traffic',
      'To group management VLANs'
    ],
    correctAnswers: [1],
    explanation: 'The native VLAN carries untagged traffic across trunk links. It must match on both ends of the trunk link.',
    isMultipleChoice: false
  },
  {
    id: 29,
    domain: 'network-access',
    text: 'What happens if there is a mismatch in native VLANs on both ends of a trunk link?',
    options: [
      'Traffic is correctly routed',
      'Traffic is dropped or misforwarded',
      'Trunk link becomes access link',
      'All VLANs are merged'
    ],
    correctAnswers: [1],
    explanation: 'Native VLAN mismatches can lead to misforwarded traffic or security vulnerabilities.',
    isMultipleChoice: false
  },
  {
    id: 30,
    domain: 'network-access',
    text: 'Which command enables a trunk port on a Cisco switch interface?',
    options: [
      'switchport trunk allowed vlan',
      'switchport mode trunk',
      'switchport access vlan',
      'trunk enable'
    ],
    correctAnswers: [1],
    explanation: '"switchport mode trunk" sets the port to operate as a trunk link, allowing multiple VLANs to traverse.',
    isMultipleChoice: false
  },
  {
    id: 31,
    domain: 'network-access',
    text: 'What is the result of issuing the "no switchport" command on a Layer 3 switch interface?',
    options: [
      'It enables the port as a routed port',
      'It disables trunking',
      'It converts the port to an access port',
      'It removes VLAN configuration'
    ],
    correctAnswers: [0],
    explanation: 'The "no switchport" command converts a Layer 3 switch interface to a routed port, allowing IP address configuration.',
    isMultipleChoice: false
  },
  {
    id: 32,
    domain: 'network-access',
    text: 'Which protocol prevents Layer 2 loops by blocking redundant paths?',
    options: [
      'DTP',
      'STP',
      'CDP',
      'VTP'
    ],
    correctAnswers: [1],
    explanation: 'Spanning Tree Protocol (STP) prevents loops by placing redundant switch ports into a blocking state.',
    isMultipleChoice: false
  },
  {
    id: 33,
    domain: 'network-access',
    text: 'Which port state in STP allows a switch port to forward traffic?',
    options: [
      'Blocking',
      'Learning',
      'Forwarding',
      'Listening'
    ],
    correctAnswers: [2],
    explanation: 'Only ports in the "forwarding" state send and receive user traffic in STP.',
    isMultipleChoice: false
  },
  {
    id: 34,
    domain: 'network-access',
    text: 'Which STP port role is elected to forward traffic on a segment?',
    options: [
      'Root port',
      'Designated port',
      'Blocked port',
      'Listening port'
    ],
    correctAnswers: [1],
    explanation: 'The Designated Port forwards traffic for a given network segment and is elected based on STP criteria.',
    isMultipleChoice: false
  },
  {
    id: 35,
    domain: 'network-access',
    text: 'What feature allows a port to bypass STP listening and learning states?',
    options: [
      'PortFast',
      'UplinkFast',
      'BPDU Guard',
      'Root Guard'
    ],
    correctAnswers: [0],
    explanation: 'PortFast allows access ports to transition directly to the forwarding state, reducing startup time for end devices.',
    isMultipleChoice: false
  },
  {
    id: 36,
    domain: 'network-access',
    text: 'Which command enables PortFast on a Cisco switch interface?',
    options: [
      'spanning-tree enable fast',
      'spanning-tree portfast',
      'stp port enable',
      'portfast enable'
    ],
    correctAnswers: [1],
    explanation: '"spanning-tree portfast" enables the PortFast feature on an interface to reduce startup delay.',
    isMultipleChoice: false
  },
  {
    id: 37,
    domain: 'network-access',
    text: 'Which command enables BPDU Guard globally on a switch?',
    options: [
      'spanning-tree bpduguard enable',
      'spanning-tree portfast bpduguard default',
      'enable bpduguard',
      'bpduguard enable'
    ],
    correctAnswers: [1],
    explanation: 'The command "spanning-tree portfast bpduguard default" enables BPDU Guard globally on PortFast-enabled ports.',
    isMultipleChoice: false
  },
  {
    id: 38,
    domain: 'network-access',
    text: 'What happens when a port with BPDU Guard enabled receives a BPDU?',
    options: [
      'The port is put in blocking mode',
      'The port is shut down (err-disabled)',
      'The port becomes a trunk port',
      'The switch reboots'
    ],
    correctAnswers: [1],
    explanation: 'If a PortFast-enabled port receives a BPDU and BPDU Guard is enabled, the port is err-disabled for protection.',
    isMultipleChoice: false
  },
  {
    id: 39,
    domain: 'network-access',
    text: 'Which Cisco protocol shares VLAN information between switches?',
    options: [
      'STP',
      'VTP',
      'DTP',
      'LLDP'
    ],
    correctAnswers: [1],
    explanation: 'VLAN Trunking Protocol (VTP) shares VLAN configuration information between Cisco switches.',
    isMultipleChoice: false
  },
  {
    id: 40,
    domain: 'network-access',
    text: 'Which of the following can cause a VLAN hopping attack? (Choose all that apply)',
    options: [
      'Using double tagging',
      'Misconfigured native VLAN',
      'Enabling portfast on trunk ports',
      'Disabling DTP on user ports'
    ],
    correctAnswers: [0, 1],
    explanation: 'VLAN hopping attacks can occur due to double tagging or native VLAN misconfigurations. Disabling DTP and not enabling trunking on user ports can help prevent it.',
    isMultipleChoice: true
  },
  {
    id: 41,
    domain: 'ip-connectivity',
    text: 'What does a router do when it receives a packet with a destination IP not in its routing table?',
    options: [
      'Sends an ICMP echo request',
      'Drops the packet',
      'Forwards to default gateway',
      'Broadcasts the packet'
    ],
    correctAnswers: [1],
    explanation: 'If a router does not have a matching route and no default route is configured, it drops the packet.',
    isMultipleChoice: false
  },
  {
    id: 42,
    domain: 'ip-connectivity',
    text: 'Which protocol dynamically learns routes between routers?',
    options: [
      'DNS',
      'DHCP',
      'OSPF',
      'FTP'
    ],
    correctAnswers: [2],
    explanation: 'OSPF (Open Shortest Path First) is a dynamic routing protocol used to learn and exchange routes between routers.',
    isMultipleChoice: false
  },
  {
    id: 43,
    domain: 'ip-connectivity',
    text: 'What type of route has an administrative distance of 0?',
    options: [
      'Static route',
      'Connected route',
      'OSPF route',
      'Default route'
    ],
    correctAnswers: [1],
    explanation: 'Connected routes have the highest priority and an administrative distance of 0.',
    isMultipleChoice: false
  },
  {
    id: 44,
    domain: 'ip-connectivity',
    text: 'Which command is used to configure a static route?',
    options: [
      'ip route',
      'route static',
      'set route',
      'configure ip'
    ],
    correctAnswers: [0],
    explanation: 'The "ip route" command is used to manually define a static route in the routing table.',
    isMultipleChoice: false
  },
  {
    id: 45,
    domain: 'ip-connectivity',
    text: 'What is the purpose of a default route?',
    options: [
      'To connect to the internet only',
      'To route traffic for unknown destinations',
      'To assign IP addresses to clients',
      'To advertise VLANs across switches'
    ],
    correctAnswers: [1],
    explanation: 'A default route is used when the destination network is not explicitly listed in the routing table.',
    isMultipleChoice: false
  },
  {
    id: 46,
    domain: 'ip-connectivity',
    text: 'Which of the following routing protocols are classless? (Choose all that apply)',
    options: [
      'RIP v1',
      'RIP v2',
      'EIGRP',
      'OSPF'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'RIP v2, EIGRP, and OSPF support classless routing and subnet masks. RIP v1 is classful.',
    isMultipleChoice: true
  },
  {
    id: 47,
    domain: 'ip-connectivity',
    text: 'What is the purpose of the "next-hop" in a routing table?',
    options: [
      'Defines the final destination',
      'Defines the outgoing interface',
      'Specifies the router to forward to',
      'Acts as a DNS server'
    ],
    correctAnswers: [2],
    explanation: 'The next-hop is the IP address of the next router that should receive the packet on its path to the destination.',
    isMultipleChoice: false
  },
  {
    id: 48,
    domain: 'ip-connectivity',
    text: 'Which OSPF component ensures loop-free topology?',
    options: [
      'Area IDs',
      'Cost Metric',
      'DR/BDR Election',
      'SPF Algorithm'
    ],
    correctAnswers: [3],
    explanation: 'The Shortest Path First (SPF) algorithm ensures loop-free paths by calculating the best route based on cost.',
    isMultipleChoice: false
  },
  {
    id: 49,
    domain: 'ip-connectivity',
    text: 'Which of the following are valid reasons for routing to fail? (Choose all that apply)',
    options: [
      'Incorrect subnet mask',
      'Incorrect default gateway',
      'Switch misconfiguration',
      'No ARP response'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Incorrect subnet mask, gateway, or missing ARP entries can all cause routing failures. Switch issues usually affect Layer 2.',
    isMultipleChoice: true
  },
  {
    id: 50,
    domain: 'ip-connectivity',
    text: 'Which command displays the IP routing table on a Cisco device?',
    options: [
      'show route',
      'show ip routes',
      'show ip route',
      'ip routing-table'
    ],
    correctAnswers: [2],
    explanation: '"show ip route" displays all the current routes known to the router.',
    isMultipleChoice: false
  },
  {
    id: 51,
    domain: 'ip-connectivity',
    text: 'What type of route is automatically created when an interface is configured with an IP address?',
    options: [
      'Static route',
      'Connected route',
      'OSPF route',
      'Floating route'
    ],
    correctAnswers: [1],
    explanation: 'Directly connected routes are automatically added when an IP address is configured on an interface.',
    isMultipleChoice: false
  },
  {
    id: 52,
    domain: 'ip-connectivity',
    text: 'Which command displays OSPF neighbors on a Cisco router?',
    options: [
      'show ospf neighbors',
      'show ip ospf neighbor',
      'show ospf topology',
      'show ip route ospf'
    ],
    correctAnswers: [1],
    explanation: '"show ip ospf neighbor" is used to verify OSPF adjacencies and neighbor states.',
    isMultipleChoice: false
  },
  {
    id: 53,
    domain: 'ip-connectivity',
    text: 'What is the default administrative distance of a static route?',
    options: [
      '0',
      '1',
      '90',
      '110'
    ],
    correctAnswers: [1],
    explanation: 'Static routes have an administrative distance of 1 by default, making them very reliable unless overridden.',
    isMultipleChoice: false
  },
  {
    id: 54,
    domain: 'ip-connectivity',
    text: 'Which condition must be met for OSPF routers to become neighbors? (Choose all that apply)',
    options: [
      'Same subnet',
      'Same area',
      'Same router ID',
      'Matching hello/dead timers'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'For OSPF routers to become neighbors, they must share the same area, subnet, and hello/dead interval timers.',
    isMultipleChoice: true
  },
  {
    id: 55,
    domain: 'ip-connectivity',
    text: 'What is the purpose of loopback interfaces in routing protocols?',
    options: [
      'They provide backup internet links',
      'They serve as router identifiers',
      'They are used for NAT translations',
      'They connect directly to switches'
    ],
    correctAnswers: [1],
    explanation: 'Loopback interfaces are logical and are often used by routing protocols to identify routers.',
    isMultipleChoice: false
  },
  {
    id: 56,
    domain: 'ip-connectivity',
    text: 'Which two types of routes can exist in a routing table? (Choose two)',
    options: [
      'Dynamic',
      'ARP',
      'Connected',
      'Switching'
    ],
    correctAnswers: [0, 2],
    explanation: 'Routing tables can contain connected routes (direct) and dynamic routes (learned via protocols).',
    isMultipleChoice: true
  },
  {
    id: 57,
    domain: 'ip-connectivity',
    text: 'What is the default administrative distance of OSPF?',
    options: [
      '110',
      '120',
      '100',
      '90'
    ],
    correctAnswers: [0],
    explanation: 'OSPF has a default administrative distance of 110.',
    isMultipleChoice: false
  },
  {
    id: 58,
    domain: 'ip-connectivity',
    text: 'What is the purpose of Equal-Cost Multi-Path (ECMP) routing?',
    options: [
      'Redundancy for VLANs',
      'Load balancing across multiple paths',
      'Faster DNS resolution',
      'High bandwidth switching'
    ],
    correctAnswers: [1],
    explanation: 'ECMP allows traffic to be load-balanced across multiple paths with equal cost metrics.',
    isMultipleChoice: false
  },
  {
    id: 59,
    domain: 'ip-connectivity',
    text: 'Which routing protocol uses bandwidth as the primary metric?',
    options: [
      'RIP',
      'EIGRP',
      'OSPF',
      'IS-IS'
    ],
    correctAnswers: [2],
    explanation: 'OSPF uses bandwidth (cost) to determine the best route.',
    isMultipleChoice: false
  },
  {
    id: 60,
    domain: 'ip-connectivity',
    text: 'How does a router determine the best route when multiple entries exist for the same destination?',
    options: [
      'Lowest metric',
      'Longest prefix match',
      'Fastest interface',
      'Highest administrative distance'
    ],
    correctAnswers: [1],
    explanation: 'Routers use the longest prefix match (most specific match) to determine the best route.',
    isMultipleChoice: false
  },
  {
    id: 61,
    domain: 'ip-connectivity',
    text: 'Which of the following best describes OSPF areas?',
    options: [
      'They define Layer 2 domains',
      'They optimize route summarization',
      'They divide networks into logical segments',
      'They provide ARP segmentation'
    ],
    correctAnswers: [2],
    explanation: 'OSPF uses areas to logically segment and optimize the routing process.',
    isMultipleChoice: false
  },
  {
    id: 62,
    domain: 'ip-connectivity',
    text: 'What is the purpose of a routing metric?',
    options: [
      'To prioritize VLANs',
      'To identify routers',
      'To determine the best route among several paths',
      'To find MAC addresses'
    ],
    correctAnswers: [2],
    explanation: 'Metrics help routers choose the most efficient path to a destination when multiple routes are available.',
    isMultipleChoice: false
  },
  {
    id: 63,
    domain: 'ip-connectivity',
    text: 'Which routing protocol is link-state and uses cost as a metric?',
    options: [
      'RIP',
      'EIGRP',
      'OSPF',
      'BGP'
    ],
    correctAnswers: [2],
    explanation: 'OSPF is a link-state protocol that uses cost (based on bandwidth) as its metric.',
    isMultipleChoice: false
  },
  {
    id: 64,
    domain: 'ip-connectivity',
    text: 'Which of the following are benefits of dynamic routing? (Choose all that apply)',
    options: [
      'Manual configuration of routes',
      'Automatic route updates',
      'Faster convergence',
      'Adapts to network changes'
    ],
    correctAnswers: [1, 2, 3],
    explanation: 'Dynamic routing automatically learns and adapts to changes in the network, making it efficient and scalable.',
    isMultipleChoice: true
  },
  {
    id: 65,
    domain: 'ip-connectivity',
    text: 'Which command shows EIGRP routes in the routing table?',
    options: [
      'show ip route eigrp',
      'show ip eigrp topology',
      'show eigrp summary',
      'show eigrp neighbors'
    ],
    correctAnswers: [0],
    explanation: '"show ip route eigrp" filters the routing table to display only the routes learned via EIGRP.',
    isMultipleChoice: false
  },
  {
    id: 66,
    domain: 'ip-services',
    text: 'What is the function of NAT (Network Address Translation)?',
    options: [
      'Converts MAC addresses to IP addresses',
      'Translates private IPs to public IPs',
      'Assigns DNS names to hosts',
      'Routes packets between VLANs'
    ],
    correctAnswers: [1],
    explanation: 'NAT translates private IP addresses to public IPs to enable internet access for internal devices.',
    isMultipleChoice: false
  },
  {
    id: 67,
    domain: 'ip-services',
    text: 'Which protocol resolves domain names to IP addresses?',
    options: [
      'DHCP',
      'DNS',
      'NAT',
      'ARP'
    ],
    correctAnswers: [1],
    explanation: 'DNS (Domain Name System) resolves domain names to their corresponding IP addresses.',
    isMultipleChoice: false
  },
  {
    id: 68,
    domain: 'ip-services',
    text: 'Which command is used to configure a static NAT translation?',
    options: [
      'ip nat translate',
      'ip nat inside source static',
      'ip static nat map',
      'nat address translate'
    ],
    correctAnswers: [1],
    explanation: 'The correct syntax to configure static NAT is "ip nat inside source static [inside IP] [outside IP]".',
    isMultipleChoice: false
  },
  {
    id: 69,
    domain: 'ip-services',
    text: 'What type of NAT allows multiple devices to share a single public IP address?',
    options: [
      'Static NAT',
      'Dynamic NAT',
      'PAT (Port Address Translation)',
      'SNAT'
    ],
    correctAnswers: [2],
    explanation: 'PAT (a type of dynamic NAT) allows many devices to share a single public IP by differentiating traffic using port numbers.',
    isMultipleChoice: false
  },
  {
    id: 70,
    domain: 'ip-services',
    text: 'Which service assigns IP addresses to hosts dynamically?',
    options: [
      'DNS',
      'NAT',
      'DHCP',
      'FTP'
    ],
    correctAnswers: [2],
    explanation: 'DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses and other network settings to hosts.',
    isMultipleChoice: false
  },
  {
    id: 71,
    domain: 'ip-services',
    text: 'What does the "ip helper-address" command do?',
    options: [
      'Sends DNS queries to a remote server',
      'Relays DHCP requests to a DHCP server',
      'Assigns static IPs to clients',
      'Forwards ICMP echo requests'
    ],
    correctAnswers: [1],
    explanation: '"ip helper-address" is used to relay broadcast-based services like DHCP across router interfaces.',
    isMultipleChoice: false
  },
  {
    id: 72,
    domain: 'ip-services',
    text: 'Which port does DNS typically use?',
    options: [
      '80',
      '443',
      '53',
      '25'
    ],
    correctAnswers: [2],
    explanation: 'DNS uses port 53 (both UDP and TCP) for domain name resolution.',
    isMultipleChoice: false
  },
  {
    id: 73,
    domain: 'ip-services',
    text: 'Which type of NAT mapping is one-to-one?',
    options: [
      'Dynamic NAT',
      'PAT',
      'Static NAT',
      'Port Forwarding'
    ],
    correctAnswers: [2],
    explanation: 'Static NAT maps one private IP address to one public IP address permanently.',
    isMultipleChoice: false
  },
  {
    id: 74,
    domain: 'ip-services',
    text: 'Which of the following services are provided by DHCP? (Choose all that apply)',
    options: [
      'IP address',
      'Subnet mask',
      'Default gateway',
      'DNS server'
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: 'DHCP can provide all basic network configuration parameters like IP, subnet mask, gateway, and DNS server.',
    isMultipleChoice: true
  },
  {
    id: 75,
    domain: 'ip-services',
    text: 'Which command displays active NAT translations on a Cisco router?',
    options: [
      'show ip nat statistics',
      'show ip nat translations',
      'show ip pat table',
      'show ip interface nat'
    ],
    correctAnswers: [1],
    explanation: '"show ip nat translations" lists all current NAT entries.',
    isMultipleChoice: false
  },
  {
    id: 76,
    domain: 'security-fundamentals',
    text: 'Which command enables password encryption on a Cisco device?',
    options: [
      'enable secret',
      'service password-encryption',
      'enable password',
      'encrypt password enable'
    ],
    correctAnswers: [1],
    explanation: 'The "service password-encryption" command encrypts all plaintext passwords in the configuration file.',
    isMultipleChoice: false
  },
  {
    id: 77,
    domain: 'security-fundamentals',
    text: 'What is the purpose of a VLAN in network security?',
    options: [
      'Encrypt traffic between switches',
      'Log all traffic from end devices',
      'Segment network devices into logical groups',
      'Block unauthorized users'
    ],
    correctAnswers: [2],
    explanation: 'VLANs help segment network devices for better control, performance, and security.',
    isMultipleChoice: false
  },
  {
    id: 78,
    domain: 'security-fundamentals',
    text: 'Which type of firewall inspects traffic up to Layer 7?',
    options: [
      'Packet filtering firewall',
      'Stateful firewall',
      'Next-Generation Firewall (NGFW)',
      'Proxy firewall'
    ],
    correctAnswers: [2],
    explanation: 'NGFWs provide deep packet inspection up to Layer 7 and support app-layer filtering and intrusion prevention.',
    isMultipleChoice: false
  },
  {
    id: 79,
    domain: 'security-fundamentals',
    text: 'Which protocol is used for secure remote CLI access to a router?',
    options: [
      'Telnet',
      'SSH',
      'FTP',
      'SNMP'
    ],
    correctAnswers: [1],
    explanation: 'SSH (Secure Shell) encrypts management traffic, making it a secure alternative to Telnet.',
    isMultipleChoice: false
  },
  {
    id: 80,
    domain: 'security-fundamentals',
    text: 'Which type of attack involves overwhelming a network with traffic?',
    options: [
      'Phishing',
      'DoS',
      'MITM',
      'Spoofing'
    ],
    correctAnswers: [1],
    explanation: 'DoS (Denial-of-Service) attacks flood networks or systems with traffic to make them unavailable.',
    isMultipleChoice: false
  },
  {
    id: 81,
    domain: 'security-fundamentals',
    text: 'What is the default behavior of an ACL if no match is found?',
    options: [
      'Allow the traffic',
      'Log the traffic',
      'Drop the traffic',
      'Send an alert'
    ],
    correctAnswers: [2],
    explanation: 'If no ACL rule matches, the implicit "deny all" rule applies, and the traffic is dropped.',
    isMultipleChoice: false
  },
  {
    id: 82,
    domain: 'security-fundamentals',
    text: 'Which command is used to apply an ACL to an interface?',
    options: [
      'access-class',
      'ip access-group',
      'ip access-list',
      'access-rule apply'
    ],
    correctAnswers: [1],
    explanation: 'Use "ip access-group [ACL] in/out" on an interface to apply an ACL.',
    isMultipleChoice: false
  },
  {
    id: 83,
    domain: 'security-fundamentals',
    text: 'Which security method prevents unauthorized devices from connecting to switch ports?',
    options: [
      'ACLs',
      'DHCP Snooping',
      'Port Security',
      '802.1X Authentication'
    ],
    correctAnswers: [2],
    explanation: 'Port Security allows you to restrict which MAC addresses are allowed on switch ports.',
    isMultipleChoice: false
  },
  {
    id: 84,
    domain: 'security-fundamentals',
    text: 'What does the "enable secret" command do?',
    options: [
      'Sets the login password for vty lines',
      'Encrypts the console password',
      'Sets the encrypted privileged EXEC mode password',
      'Secures telnet connections'
    ],
    correctAnswers: [2],
    explanation: 'The "enable secret" command sets a secure, encrypted password for privileged EXEC access.',
    isMultipleChoice: false
  },
  {
    id: 85,
    domain: 'security-fundamentals',
    text: 'Which of the following are recommended security practices for Cisco devices? (Choose all that apply)',
    options: [
      'Use SSH instead of Telnet',
      'Use "enable password" only',
      'Implement strong passwords',
      'Restrict access using ACLs'
    ],
    correctAnswers: [0, 2, 3],
    explanation: 'Best practices include using SSH, strong passwords, and ACLs. "enable secret" is preferred over "enable password".',
    isMultipleChoice: true
  },
  {
    id: 86,
    domain: 'security-fundamentals',
    text: 'What does DHCP Snooping help prevent?',
    options: [
      'Duplicate IP addresses',
      'Unauthorized DHCP servers',
      'ARP spoofing',
      'MAC flooding'
    ],
    correctAnswers: [1],
    explanation: 'DHCP Snooping blocks untrusted DHCP servers to prevent rogue devices from assigning IPs.',
    isMultipleChoice: false
  },
  {
    id: 87,
    domain: 'security-fundamentals',
    text: 'Which command limits the number of MAC addresses on a switch port?',
    options: [
      'mac-limit',
      'switchport mac-limit',
      'switchport port-security maximum',
      'interface max-mac'
    ],
    correctAnswers: [2],
    explanation: 'The "switchport port-security maximum" command limits how many MAC addresses are allowed on a port.',
    isMultipleChoice: false
  },
  {
    id: 88,
    domain: 'security-fundamentals',
    text: 'Which feature inspects and drops ARP packets with invalid bindings?',
    options: [
      'DHCP Snooping',
      'IP Source Guard',
      'Dynamic ARP Inspection',
      'ACL Filtering'
    ],
    correctAnswers: [2],
    explanation: 'Dynamic ARP Inspection protects against ARP spoofing by checking packets against valid bindings.',
    isMultipleChoice: false
  },
  {
    id: 89,
    domain: 'security-fundamentals',
    text: 'Which attack tries to intercept communication between two hosts?',
    options: [
      'DoS',
      'Spoofing',
      'Man-in-the-Middle (MITM)',
      'Ping of Death'
    ],
    correctAnswers: [2],
    explanation: 'MITM attacks intercept traffic to spy or alter communication between two parties.',
    isMultipleChoice: false
  },
  {
    id: 90,
    domain: 'security-fundamentals',
    text: 'What does 802.1X provide in a wired network?',
    options: [
      'MAC address filtering',
      'VLAN assignment',
      'Port-based authentication',
      'DHCP relay'
    ],
    correctAnswers: [2],
    explanation: '802.1X enforces authentication before granting access to a network port.',
    isMultipleChoice: false
  },
  {
    id: 91,
    domain: 'automation-and-programmability',
    text: 'What is the primary purpose of network automation?',
    options: [
      'Reduce internet speed',
      'Increase manual configuration',
      'Improve efficiency and reduce errors',
      'Disable configuration backups'
    ],
    correctAnswers: [2],
    explanation: 'Network automation improves operational efficiency, accuracy, and consistency while reducing manual errors.',
    isMultipleChoice: false
  },
  {
    id: 92,
    domain: 'automation-and-programmability',
    text: 'Which data format is commonly used in REST APIs for network automation?',
    options: [
      'HTML',
      'XML',
      'JSON',
      'CSV'
    ],
    correctAnswers: [2],
    explanation: 'JSON (JavaScript Object Notation) is a lightweight and widely used data format in REST APIs.',
    isMultipleChoice: false
  },
  {
    id: 93,
    domain: 'automation-and-programmability',
    text: 'What does the acronym REST stand for in REST APIs?',
    options: [
      'Reliable End System Transfer',
      'Representational State Transfer',
      'Redundant Ethernet Security Technology',
      'Remote Endpoint Secure Tunnel'
    ],
    correctAnswers: [1],
    explanation: 'REST stands for Representational State Transfer, an architectural style for designing networked APIs.',
    isMultipleChoice: false
  },
  {
    id: 94,
    domain: 'automation-and-programmability',
    text: 'Which HTTP method is used to retrieve information from a REST API?',
    options: [
      'POST',
      'GET',
      'PUT',
      'DELETE'
    ],
    correctAnswers: [1],
    explanation: 'GET is the standard HTTP method used to retrieve information from a REST API endpoint.',
    isMultipleChoice: false
  },
  {
    id: 95,
    domain: 'automation-and-programmability',
    text: 'Which of the following are benefits of network programmability? (Choose all that apply)',
    options: [
      'Faster deployment',
      'Reduced human error',
      'Manual configuration required',
      'Improved scalability'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'Network programmability offers automation, reduces errors, and enhances scalability and agility.',
    isMultipleChoice: true
  },
  {
    id: 96,
    domain: 'automation-and-programmability',
    text: 'Which tool is commonly used for automating network configuration tasks?',
    options: [
      'Notepad++',
      'Ansible',
      'Paint',
      'Excel'
    ],
    correctAnswers: [1],
    explanation: 'Ansible is a popular automation tool used for configuring and managing network devices.',
    isMultipleChoice: false
  },
  {
    id: 97,
    domain: 'automation-and-programmability',
    text: 'What is Cisco DNA Center primarily used for?',
    options: [
      'Gaming',
      'Email management',
      'Network automation and assurance',
      'Firewall filtering'
    ],
    correctAnswers: [2],
    explanation: 'Cisco DNA Center is a centralized network management and automation platform.',
    isMultipleChoice: false
  },
  {
    id: 98,
    domain: 'automation-and-programmability',
    text: 'What is the purpose of an API in networking?',
    options: [
      'To visualize topology',
      'To provide a graphical interface',
      'To enable programmatic access to network functions',
      'To create static routes'
    ],
    correctAnswers: [2],
    explanation: 'APIs allow developers to interact programmatically with network devices and services.',
    isMultipleChoice: false
  },
  {
    id: 99,
    domain: 'automation-and-programmability',
    text: 'Which of the following is a Python library used for network automation?',
    options: [
      'NumPy',
      'Matplotlib',
      'Netmiko',
      'Flask'
    ],
    correctAnswers: [2],
    explanation: 'Netmiko is a Python library that simplifies SSH connections to network devices for automation.',
    isMultipleChoice: false
  },
  {
    id: 100,
    domain: 'automation-and-programmability',
    text: 'Which of the following are common characteristics of RESTful APIs? (Choose all that apply)',
    options: [
      'Stateless',
      'Uses HTTP',
      'Depends on SSH tunneling',
      'Supports JSON format'
    ],
    correctAnswers: [0, 1, 3],
    explanation: 'RESTful APIs are stateless, use HTTP methods, and typically exchange data in JSON format.',
    isMultipleChoice: true
  }
      
          
];

export const examInfo = {
  title: "Cisco CCNA 200-301",
  description: "Cisco Certified Network Associate Exam",
  duration: 120, // minutes
  totalQuestions: 100,
  passingScore: 80, // percentage
};
