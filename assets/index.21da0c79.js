import{e as g,R as u,r as t,b as s,F as i,j as m}from"./index.c3c628d1.js";import{S as p}from"./bilibili.7b2a735f.js";import{S as L,V as h,g as V,a as f}from"./index.20ddffbd.js";const S=e=>{const{videosList:r,enterLoading:a}=e,{getVideoListDispatch:n,getSuggestVideoListDispatch:d}=e,[o,v]=t.exports.useState(""),[D,c]=t.exports.useState(!1);return t.exports.useEffect(()=>{c(!0)},[]),t.exports.useEffect(()=>{n()},[]),t.exports.useEffect(()=>{d(o)},[o]),s(i,{children:a?s(p.Paragraph,{lineCount:25,animated:!0}):(()=>m(i,{children:[s(L,{}),s(h,{videosList:r})]}))()})},x=e=>({enterLoading:e.home.enterLoading,videosList:e.home.videosList,suggestVideosList:e.home.suggestVideosList}),l=e=>({getVideoListDispatch(){e(V())},getSuggestVideoListDispatch(){e(f())}});var w=g(x,l)(u.memo(S));export{w as default};