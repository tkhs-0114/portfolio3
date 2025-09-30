import React, { useEffect, useState, useRef } from "react";
import { Window } from "../window/window";

interface ManagerProps {
  children: React.ReactNode[] | React.ReactNode;
  approveActivation?: boolean;
}

export const Manager = ({
  children,
  approveActivation = false,
}: ManagerProps) => {
  const [isVertical, setIsVertical] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 縦横比からflexの向きを決定
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkSize = () => {
      const { width, height } = container.getBoundingClientRect();
      setIsVertical(height > width);
    };

    const resizeObserver = new ResizeObserver(checkSize);
    resizeObserver.observe(container);

    checkSize();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // アニメーションの開始処理
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(!!approveActivation);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [approveActivation]);

  return (
    <div
      ref={containerRef}
      className={`flex ${isVertical ? "flex-col" : "flex-row"} h-full gap-1`}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => {
          const isWindow = React.isValidElement(child) && child.type == Window;
          const isManager =
            React.isValidElement(child) && child.type == Manager;
          return (
            <div
              key={index}
              className={`${
                isActive || (isWindow && approveActivation)
                  ? `flex-1`
                  : `flex-0`
              } overflow-hidden transition-all duration-300`}
            >
              {isActive && isManager
                ? React.cloneElement(
                    child as React.ReactElement<ManagerProps>,
                    {
                      approveActivation: isActive,
                    }
                  )
                : child}
            </div>
          );
        })
      ) : (
        <div className="flex-1 overflow-hidden">{children}</div>
      )}
    </div>
  );
};
