import { css, keyframes } from "styled-components";

export const adminAnimations = css`
  /* .admin-animated-enter {
    opacity: 0.1;
    transform: translateY(100%);
  }
  .admin-animated-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms;
  } */

  .admin-animated-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-animated-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  }

  .admin-animated-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .admin-animated-exit-active {
    opacity: 0.1;
    transform: translateY(100%);
    transition: all 500ms;
  }
`;

export const fadeInFromRight = keyframes`
  from {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateX(100%);
  }

  to{
    opacity: 01;
    transform: translateX(0);
  }
`;

export const menuAnimation = css`
  /* MOUNTING */
  .menuitem-animated-enter {
    opacity: 0.01;
    transform: translateX(-120px);
    &.menuitem-animated-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 300ms ease-out;
    }
  }
  /* UNMOUNTING */
  .menuitem-animated-exit {
    opacity: 1;
    transform: translateY(0);
    &.menuitem-animated-exit-active {
      opacity: 0.01;
      transition: 300ms ease-out;
    }
  }
`;
