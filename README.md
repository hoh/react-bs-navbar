# react-bs-navbar

Navbar component for Bootstrap 3 using React

### Usage

```javascript
React.render(
    React.createElement(Navbar.Navbar, menu_content),
    document.getElementById('mount_point')
);
```

### Menu content format

The content of the menu can be described programmatically as an object. See [example.html](example.html) for a more detailed example.

```javascript
{
    header: {
        brand: null,
        logo: 'logo.png',
        logo_alt: 'Brand logo',
        href: "/home"
    },
    children: [
        {
            position: '',
            children: [
                {
                    title: 'One',
                    glyphicon: 'equalizer',
                    children: [
                        {
                            title: 'One A',
                            glyphicon: 'equalizer',
                            href: '/one/A'
                        },
                        {
                            title: 'One B',
                            href: '/one/B'
                        }
                    ]
                },
                {
                    title: 'Two',
                    glyphicon: 'volume-down',
                    children: [
                        {
                            title: 'Two A',
                            href: '/two/A'
                        },
                    ]
                },
            ]
        },
        {
            position: 'navbar-right',
            children: [
                {
                    title: 'Logout',
                    glyphicon: 'log-out',
                    href: '/logout'
                },
            ]
        }
    ]
}
```

### License

This project is BSD-Licensed.
