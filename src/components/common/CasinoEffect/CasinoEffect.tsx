import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

type CasinoEffectProps = {
  count: string;
};

const CasinoEffect = ({ count }: CasinoEffectProps) => {
  return (
    <CasinoEffectStyled>
      <TransitionGroup component={null}>
        <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
          <span>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  );
};

export default CasinoEffect;

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
  }
  
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transition: 0.3s;
    transform: translateY(0);
  }

  .count-animated-exit {
    transform: translateY(0);
    position: absolute;
    right: 0;
  }
  .count-animated-exit-active {
    transition: 0.3s;
    transform: translateY(-100%);
  }

`;
