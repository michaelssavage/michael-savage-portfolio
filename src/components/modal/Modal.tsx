import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Close } from "components/icons";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, setIsOpen, children } = props;

  const selector = "#modal";
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | DocumentFragment | null>(null);
  const backdrop = useRef(null);
  const container = useRef(null);
  const backdropMouseDown = useRef(false);

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") setIsOpen(false);
    },
    [setIsOpen]
  );

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);

    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [selector, isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    return () => document.removeEventListener("keydown", onKeyDown, false);
  }, [onKeyDown]);

  if (ref.current == null) return null;

  return mounted
    ? createPortal(
        <CSSTransition
          classNames="fadeIn"
          nodeRef={backdrop}
          in={isOpen}
          timeout={240}
          unmountOnExit
        >
          <div
            ref={backdrop}
            onMouseDown={(evt) => {
              if (evt.target === backdrop.current)
                backdropMouseDown.current = true;
              else backdropMouseDown.current = false;
            }}
            onMouseUp={(evt) => {
              if (evt.target === backdrop.current && backdropMouseDown.current)
                setIsOpen(false);
            }}
            className={styles.root}
            aria-label="searchModalLabel"
          >
            <CSSTransition
              classNames="appears"
              nodeRef={container}
              in={isOpen}
              timeout={240}
              unmountOnExit
            >
              <div className={styles.container} ref={container} role="dialog">
                <div className={styles.header}>
                  <button
                    onClick={() => setIsOpen(false)}
                    role="button"
                    className={styles.closeBtn}
                  >
                    Close
                    <Close />
                  </button>
                </div>
                <div>{children}</div>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>,
        ref.current
      )
    : null;
};
