import request from 'browser-request';

export default (app) => {
    const form = document.querySelector('.js-signup-form');

    const options = {
        method: 'POST',
        url: '/signup',
        json: true
    };

    const handleCreation = (err, res, body) => {
      if (err) throw new Error(err);

      if (body.build && body.build.status === 'succeeded') {
        console.log('finished body:', body);
      } else if (body.status === 'pending')  {
        console.log('poll body:', body);
        options['url'] = `/signuppoll/${body.id}`;
        options['method'] = 'GET';
        delete options.body;

        setTimeout(() => {
          request(options, handleCreation);
        }, 1000);
      }
    };

    const handleSubmission = (e) => {
        e.preventDefault();

        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const name = form.elements['name'].value;
        const appName = form.elements['appName'].value;
        const data = {
            email: email,
            password: password,
            name: name,
            appName: appName
        };
        options['body'] = data;
        options['url'] = '/signup';
        console.log('sign up options:', options)
        request(options, handleCreation);
    }

    form.addEventListener('submit', handleSubmission);
}