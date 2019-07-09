const email = prompt(' Dear Friend, enter your E-mail. ', '');
const adminEm = 'admin@gmail.com';
const adminPass = 'AdminPass';
const useEm = 'user@gmail.com';
const usePass = 'UserPass';
const emailLength = 6;
const passLength = 5;

if ( email===null || email==='') {
    alert('Canceled.');
} else if (email.length < emailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (email===adminEm || email===useEm) {
    const pass = prompt('Let\'s enter your password. ','');
    if (pass === null || pass === '') {
        alert('Canceled.');
    } else if (email===useEm && pass===usePass
        ||email===adminEm && pass===adminPass ) {
        const passChange = confirm('Do you want to change your password?');
        if (passChange ) {
            const passOld = prompt('Please enter your password.', '');
            if (passOld === null || passOld === '') {
                alert('Canceled.');
            } else if (passOld === pass) {
                const passNew = prompt('Please enter your new password.', '');
                if (passNew.length < passLength) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    const passNewReaped = prompt('Please enter your new password again.', '');
                    if (passNewReaped === passNew) {
                        alert('You have successfully changed your password.');
                    } else if (passNewReaped !== passNew) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('Canceled.');
                    }
                }
            } else {
                alert('Wrong password.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('I don’t know you.');
}