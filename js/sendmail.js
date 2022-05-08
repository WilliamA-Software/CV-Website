const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#open_email')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event){
      event.preventDefault()
      const form = new FormData(this)
      console.log(form.get('Name'))
      $buttonMailto.setAttribute('href', `mailto:andresotamarano12@gmail.com?subject=${form.get('Subject')} ${form.get('Name')}&body=${form.get('Message')}`)
      $buttonMailto.click()
    }