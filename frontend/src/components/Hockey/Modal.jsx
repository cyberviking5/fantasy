import React from 'react'
import ReactDom from 'react-dom'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import win from '../../assets/satoru-gojo-jujutsu-2880x1800-10828.png'
import './Modal.css'

const MODAL_STYLES = {
    width:'700px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  borderRadius:'10px',
  gap:'10px'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ token_id,open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="openedM-nav-close" onClick={onClose}>
              <span>
                <AiOutlineClose size={50} />
              </span>
            </div>
        <h1 className='mod-h1'>YOUR REWARDS</h1>
        <img src={win} className='h-[240px] w-[360px]' ></img>
        <p className='modP'>TOKEN ADDRESS : 0xBe7aADAc5C8553eDB40a94d699B7eEcFa06945Be </p>
        <p className='modP'>TOKEN ID: {token_id}</p>
      </div>
    </>,
    document.getElementById('portal')
  )
}