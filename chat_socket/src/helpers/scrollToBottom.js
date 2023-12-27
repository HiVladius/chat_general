import { animateScroll } from "react-scroll";

export const scrollToBottom = (divRef) => {
    animateScroll.scrollToBottom({
        containerId: divRef,
        duration: 0,
    });
}

export const scrollToBottomAnimated = (divRef) => {
    animateScroll.scrollToBottom({
        containerId: divRef,
        duration: 250,
    });
}
