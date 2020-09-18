if (!window.pbnHideChatInit) {
  const displayBox = document.createElement('div');
  displayBox.setAttribute(
    'style',
    'position: absolute; top: 0px; left: 0px; right: 0px; height: 50%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; z-index: 20000000; pointer-events: none;'
  );
  document.body.appendChild(displayBox);

  const hideChatStyle = document.createElement('style');
  hideChatStyle.innerHTML =
    '.TPBTOverlayScroll > .TPBTOverlayScrollItem.TPBTOverlayScrollInfoItem {display:none !important;}';

  const notify = (text, time = 2000) => {
    const textEl = document.createElement('h1');
    textEl.innerText = text;
    displayBox.appendChild(textEl);
    setTimeout(() => {
      displayBox.removeChild(textEl);
    }, time);
  };

  window.pbnChatIsVisible = true;
  const toggleVisible = () => {
    if (window.pbnChatIsVisible) {
      document.body.appendChild(hideChatStyle);
      window.pbnChatIsVisible = false;
    } else {
      hideChatStyle.remove();
      window.pbnChatIsVisible = true;
    }
    return window.pbnChatIsVisible;
  };

  window.pbnNotify = notify;
  window.pbnToggleChat = toggleVisible;
  window.pbnHideChatInit = true;
}

window.pbnNotify(window.pbnToggleChat() ? 'CHAT ON!!' : 'CHAT OFF!!');
