/* react-bs-navbar: Navbar component for Bootstrap 3 using React */

Glyphicon = React.createClass({
    getDefaultProps: function() {
        return {
            icon: 'ok'
        };
    },

    render: function() {
        return (
            <span className={'glyphicon glyphicon-' + this.props.icon}></span>
        );
    }
});


NavbarLogo = React.createClass({
    getDefaultProps: function() {
        return {
            alt: 'Brand logo',
            style: {
                height: '30px',
                marginTop: '-5px',
                display: 'block'
            }
        };
    },

    render: function() {
        return (
            <img className='rn-navbar-logo'
                 src={this.props.src}
                 alt={this.props.alt}
                 style={this.props.style} />
        );
    }
});


NavbarDropdownItem = React.createClass({

    getDefaultProps: function() {
        return {
            title: "Subtitle",
            href: '/',
            glyphicon: null
        };
    },

    render: function() {
        return (
            <li key={this.props.key}>
                <a href={this.props.href}>
                    <Glyphicon icon={this.props.glyphicon} />
                    {this.props.title}
                </a>
            </li>
        );
    }
});


NavbarDropdown = React.createClass({

    getDefaultProps: function() {
        return {
            title: "Nava",
            glyphicon: null,
            children: []
        };
    },

    render: function() {
        items = this.props.children.map(function(item, i) {
            item.key = i;
            return React.createElement(NavbarDropdownItem, item);
        });

        return (
            <li className='dropdown' key={this.props.key}>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
                    <Glyphicon icon={this.props.glyphicon} />
                    {this.props.title}
                    <span className='caret'></span>
                </a>
                <ul className='dropdown-menu' role='menu'>
                    {items}
                </ul>
            </li>
        );
    }
});


NavbarLink = React.createClass({

    getDefaultProps: function() {
        return {
            title: "Nava",
            glyphicon: null,
            href: '/',
        };
    },

    render: function() {
        return (
            <li key={this.props.key}>
                <a href={this.props.href}>
                    <Glyphicon icon={this.props.glyphicon} />
                    {this.props.title}
                </a>
            </li>
        );
    }
});


NavbarNav = React.createClass({

    getDefaultProps: function() {
        return {
            position: null,
            children: [],
        };
    },

    render: function() {
        items = this.props.children.map(function(menu, i) {
            if (React.isValidElement(menu))
                /* Custom React element as Navbar dropdown or link */
                return menu;
            else {
                menu.key = i;
                if (menu.children) {
                    return React.createElement(NavbarDropdown, menu);
                }
                else {
                    return React.createElement(NavbarLink, menu);
                }
            }
        });

        return (
            <ul className={'nav navbar-nav ' + this.props.position} key={this.props.key}>
                {items}
            </ul>
        );
    }
});


NavbarHeader = React.createClass({

    getDefaultProps: function() {
        return {
            href: '/',
            brand: "Home",
            logo: null,
            logo_alt: null,
        };
    },

    render: function() {
        return (
            <div className='navbar-header'>
                <button className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        type='button'
                        data-target='#bs-example-navbar-collapse-1'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </button>
                <a className='navbar-brand' href={this.props.href}>
                    <NavbarLogo src={this.props.logo} alt={this.props.alt} />
                    {this.props.brand}
                </a>
            </div>
        );
    }
});


Navbar = React.createClass({

    getDefaultProps: function() {
        return {
            header: {
                brand: "Home"
            },
            children: []
        };
    },

    render: function() {

        header = React.createElement(NavbarHeader, this.props.header);

        items = this.props.children.map(function(navbar, i) {
            navbar.key = i;
            return React.createElement(NavbarNav, navbar);
        });

        return (
            <nav className='navbar navbar-default navbar-fixed-top navbar-inverse'
                 role='navigation'>
                <div className='container-fluid'>
                    {header}
                    <div id='FIXME' className='collapse navbar-collapse'>
                        {items}
                    </div>
                </div>
            </nav>
        );
    }
});
