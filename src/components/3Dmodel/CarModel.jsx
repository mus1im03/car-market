import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import M4 from "../../../public/M4";
import styles from "./CarModel.module.css";
import mpower from "../../assets/img/BMW_M.png";
import { motion } from "framer-motion";

const CarModel = () => {
  
  return (
    <>
      <Canvas shadows camera={{ position: [40, 0.5, 20], fov: 5 }}>
        <spotLight
          position={[0, 9, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <M4
            scale={1}
            rotation={[0, Math.PI / 5, 0]}
          />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div className={styles.model_title}>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={mpower}
          alt=""
          className={styles.mpower}
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Всегда в своей стихии
        </motion.h1>
      </div>
    </>
  );
};

export default CarModel;
