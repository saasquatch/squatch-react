import React, { useLayoutEffect } from "react";

type fn = ()=>void;
/**
 * For server-rendered apps will not do any rendering server-side
 */
const useBrowserOnlyEffect = typeof window === "undefined" ? useLayoutEffect : (fn:fn,deps?:any[])=>{}

export default useBrowserOnlyEffect;