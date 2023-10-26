
interface ComponentProps {
  title: string;
}


class Component<T extends ComponentProps> {
  constructor (public props:T) {

  }
}

class Page1 extends Component<ComponentProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}