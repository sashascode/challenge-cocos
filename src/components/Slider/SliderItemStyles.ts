import styled from 'styled-components';

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const StyledSliderItem = styled.div<Props>`
  margin: 0 -20px;
  transition: transform 500ms ease;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  transform: scale(1);
  user-select: none;

  flex: 0 0
    calc(
      100% / ${(props) => props.visibleSlides}
    );

  img {
    height: 100%;
    width: 100%;
    border: none; /* Set initial border */
    transition: border 0.2s ease-in-out; /* Add transition */

    &:hover {
      border: 3px solid #0062e1 !important;
    }
  }

  :hover {
    transform: scale(${(props) => props.zoomFactor / 100 + 1}) !important;
  }

  :hover ~ * {
    transform: translateX(${(props) => props.zoomFactor / 2 + '%'}) !important;
  }

  &.left {
    transform-origin: left;

    :hover ~ * {
      transform: translateX(${(props) => props.zoomFactor + '%'}) !important;
    }
  }

  &.right {
    transform-origin: right;

    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;
