import React from "react";
import styles from "./Gallery.module.css";
import GalleryItem from "../GalleryItem/GalleryItem";

export default function Gallery({
  isFluid = true,
  children,
  containerStyles,
  childrenContainerStyles,
}) {
  const parseChildrenItems = () => {
    return children.map((children) => (
      <GalleryItem childrenContainerStyles={childrenContainerStyles}>
        {children}
      </GalleryItem>
    ));
  };

  return (
    <div className={styles.relativeContainer}>
      <div
        className={`${
          isFluid ? styles.fluidContainer : styles.insetContainer
        } ${styles.container} ${containerStyles}`}
      >
        {parseChildrenItems()}
      </div>
    </div>
  );
}
