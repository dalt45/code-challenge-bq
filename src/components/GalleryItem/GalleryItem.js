import React from "react";
import styles from "./GalleryItem.module.css";

export default function GalleryItem(props) {
  return (
    <div
      className={`${styles.galleryItemContainer} ${props.childrenContainerStyles}`}
    >
      {props.children}
    </div>
  );
}
