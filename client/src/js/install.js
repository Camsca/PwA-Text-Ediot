const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
 event.preventDefault();
 installPrompt = event;
butInstall.removeAttribute("hidden");  

});
//click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (installPrompt) {
      try {
        const choiceResult = await installPrompt.prompt();
  
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the installation');
        } else {
          console.log('User dismissed the installation');
        }
      } catch (error) {
        console.error('Error occurred during installation:', error);
      } finally {
        installPrompt = null; 
        butInstall.setAttribute('hidden', ''); 
      }
    }
  });


window.addEventListener('appinstalled', (event) => {
console.log('👍', 'appinstalled', event);
});
