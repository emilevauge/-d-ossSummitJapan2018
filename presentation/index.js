// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  traefik: require("../assets/figures/traefik.logo.svg"),
  huh: require("../assets/figures/huh.gif"),
  microservices: require("../assets/figures/microservices.png"),
  docker: require("../assets/figures/docker-logo.png"),
  rkt: require("../assets/figures/rkt.png"),
  mesos: require("../assets/figures/mesos-logo.png"),
  swarm: require("../assets/figures/swarm.png"),
  k8s: require("../assets/figures/kubernetes-logo.png"),
  rancher: require("../assets/figures/rancher-logo.png"),
  consul: require("../assets/figures/consul-logo.png"),
  etcd: require("../assets/figures/etcd-logo.png"),
  reverse: require("../assets/figures/traditionnalArchitecture.png"),
  reverseConfig: require("../assets/figures/traditionnalArchitecture.config.png"),
  stop: require("../assets/figures/stop.gif"),
  traefikArchitecture: require("../assets/figures/traefikArchitecture.png"),
  priere: require("../assets/figures/priere.jpg"),
  greatBut: require("../assets/figures/greatBut.gif"),
  letsEncrypt: require("../assets/figures/letsencrypt-logo.svg"),
  dockerImage: require("../assets/figures/docker.image.png"),
  reblochon: require("../assets/figures/reblochon.png"),
  mantl: require("../assets/figures/mantl-logo.png"),
  mantlBack: require("../assets/figures/mantl.back.svg"),
  cisco: require("../assets/figures/cisco-logo.png"),
  zenika: require("../assets/figures/zenika.logo.png"),
  containous: require("../assets/figures/containous.logo.png"),
  arrow: require("../assets/figures/arrow.png"),
  traefikSticker: require("../assets/figures/traefik.sticker.png"),
  camembert: require("../assets/figures/camembert.png"),
  morbier: require("../assets/figures/morbier.png"),
  raclette: require("../assets/figures/raclette.png"),
  money: require("../assets/figures/money.gif"),
  roquefort: require("../assets/figures/traefik-roquefort.png"),
  birthday: require("../assets/figures/traefik.birthday.jpg"),
  cancoillotte: require("../assets/figures/traefik-cancoillotte.png"),
  features: require("../assets/figures/features.png"),
  tetedemoine: require("../assets/figures/traefik-tete-de-moine.png"),



  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2",
  secondary: "#1F2022",
  tertiary: "#e2e2e2",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Lobster Two"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={300} theme={theme}>

        <Slide bgColor="white">
          <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200" />
          <Heading size={2} caps fit textColor="primary">
            Clound Native  
            </Heading>
          <Heading size={1} caps fit textColor="primary" >
          Edge Router
            </Heading>
          <Text margin="40" >Emile Vauge (エミール ボージ)</Text>
          <Text margin="20" >OSS Summit Japan 2018</Text>
        </Slide>

        <Slide>
          <Heading textColor="white" >
            $ whoami
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>French 🇫🇷 Developer</ListItem></Appear>
            <Appear><ListItem>I ❤ Go, I ❤ Docker 🐳 and 🐧</ListItem></Appear>
            <Appear><ListItem>CEO of Containous</ListItem></Appear>
            <Appear><ListItem>Creator and maintainer of <Link href="https://traefik.io">traefik.io</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="black">
          <Heading size={2} caps textColor="white">
            Why Another
            </Heading>
          <Image src={images.huh.replace("/", "")} margin="20px auto 20px" height="300" />
          <Heading size={2} caps textColor="white">
            reverse-proxy?
            </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={3} fit textColor="black">
            Microservices
            </Heading>
          <Image src={images.microservices.replace("/", "")} margin="20px auto 40px" fit />
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            Losely Coupled
            </Heading>
          <Heading size={1} fit caps>
            Robust to Change
            </Heading>
          <Heading size={1} fit caps textColor="black">
            Polyglotism
            </Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} fit caps textColor="white">
            Dynamic
            </Heading>
          <Heading size={1} fit caps textColor="white">
            Infrastructure
            </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            And now
            </Heading>
          <Heading size={1} fit caps>
            Let's add a
            </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            reverse proxy
            </Heading>
        </Slide>

        <Slide bgColor="white" >
          <Image src={images.reverse.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="white" >
          <Image src={images.reverseConfig.replace("/", "")} height="550" />
        </Slide>

        <Slide bgColor="black">
          <Image src={images.stop.replace("/", "")} margin="20px auto 20px" height="400" />
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} textColor="primary" >
            Here comes
            </Heading>
          <Image src={images.traefik.replace("/", "")} height="400" padding="20" />
        </Slide>

        <Slide bgColor="white">
          <Image src={images.traefikArchitecture.replace("/", "")} height="550" />
        </Slide>

        <Slide bgImage={images.features.replace("/", "")} bgSize="100%"/>

        <Slide>
          <Heading textColor="white" >
            More Features!
            </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Single binary (Did I say I ❤ Go ?)</ListItem></Appear>
            <Appear><ListItem>Circuit breakers</ListItem></Appear>
            <Appear><ListItem>Websockets</ListItem></Appear>
            <Appear><ListItem>HTTP2</ListItem></Appear>
            <Appear><ListItem>GRPC</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1}>
            Official image
          </Heading>
          <Text textColor="white">
            $ docker pull traefik
          </Text>
          <Image fit src={images.dockerImage.replace("/", "")} height="400" padding="20" />
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} textColor="white" >
            Demo
          </Heading>
          <Image fit src={images.priere.replace("/", "")} height="500" padding="20" />
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" >
            Traefik 1.4
          </Heading>
          <Image src={images.roquefort.replace("/", "")} height="500" />
          <Text textColor="primary">
            October 2017
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={2} fit caps>
            GRPC - Auth Forward
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            SSL Redirect,
            Custom error pages
          </Heading>
          <Heading size={2} fit caps>
            Custom Headers,
            Datadog, Statd
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Proxy Protocol
          </Heading>
          <Heading size={2} fit caps>
            Multi arch, HSTS, New Doc...
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" >
            Traefik 1.5
          </Heading>
          <Image src={images.cancoillotte.replace("/", "")} height="500" />
          <Text textColor="primary">
            January 2018
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} fit caps textColor="primary">
          Rate limiting, ETCD v3
          </Heading>
          <Heading size={2} fit caps>
            Azure Service Fabric
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Custom Headers k8s / Docker
          </Heading>
          <Heading size={2} fit caps>
            Dynamic TLS certificates
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" >
            Traefik 1.6
          </Heading>
          <Image src={images.tetedemoine.replace("/", "")} height="500" />
          <Text textColor="primary">
            May 2018
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} fit caps textColor="primary">
          Let's Encrypt Wildcards
          </Heading>
          <Heading size={2} fit caps>
            Open Tracing, Zipkin
          </Heading>
          <Heading size={1} fit caps textColor="primary">
            Kubernetes Secrets
          </Heading>
          <Heading size={2} fit caps>
            Access Logs Filtering
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            15,800+ ⭐
            </Heading>
          <Heading size={2} fit caps>
            100M+ ⬇️
            </Heading>
          <Heading size={1} fit caps >
            1400+ LGTM, 280+ 👷
            </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit caps>
            We are
          </Heading>
          <Heading size={1} fit caps>
            hiring !
          </Heading>
          <Code>
          docker run -it containous/jobs
          </Code>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" textSize="170">
            I have
            </Heading>
          <Image src={images.traefik.replace("/", "")} height="200" />
          <Heading size={1} caps textColor="primary">
            Stickers!
            </Heading>
        </Slide>

        <Slide >
          <Heading size={1} caps  >
            Thank you!
            </Heading>
          <Text >
            <Link href="https://traefik.io">traefik.io</Link>
          </Text>
          <Text  >
            <Link href="https://twitter.com/traefikproxy">@traefikproxy</Link>
          </Text>
          <Text >
            <Link href="https://github.com/emilevauge">@emilevauge</Link>
          </Text>
          <Text >
            <Link href="https://emilevauge.github.io/ossSummitJapan2018">emilevauge.github.io/ossSummitJapan2018</Link>
          </Text>
        </Slide>
      </Deck>
    );
  } 
}
