import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import './Carou.css';

type CarouselProps = {
  items: string[];
  active: number;
};

type CarouselState = {
  active: number;
  direction: string;
};

type ItemProps = {
  name: string;
  level: number;
  githubLink: string;
};

export default class Carousel extends Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      active: this.props.active,
      direction: '',
    };
  }

  generateItems() {
    const items: JSX.Element[] = [];
    let level: number;
    console.log(this.state.active);
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = this.props.items.length + i;
      } else if (i >= this.props.items.length) {
        index = i % this.props.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item
          key={index}
          name={this.props.items[index]}
          level={level}
          githubLink={`https://github.com/VicthorVF21/${this.props.items[index]}`}
        />
      );
    }
    return items;
  }

  moveLeft() {
    let newActive = this.state.active;
    newActive--;
    const direction = newActive < this.state.active ? 'right' : 'left'; 
    this.setState({
      active: newActive < 0 ? this.props.items.length - 1 : newActive,
      direction: direction,
    });
}

moveRight() {
    let newActive = this.state.active;
    newActive++;
    const direction = newActive > this.state.active ? 'left' : 'right'; 
    this.setState({
      active: newActive % this.props.items.length,
      direction: direction,
    });
}

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.moveLeft.bind(this)}>
          <i className="fi-arrow-left"></i>
        </div>
        <TransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </TransitionGroup>
        <div className="arrow arrow-right" onClick={this.moveRight.bind(this)}>
          <i className="fi-arrow-right"></i>
        </div>
      </div>
    );
  }
}

class Item extends Component<ItemProps> {
  render() {
    const className = 'item level' + this.props.level;
    return (
      <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer"className={className}>
        {this.props.name}
      </a>
    );
  }
}