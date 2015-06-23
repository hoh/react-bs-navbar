/* react-bs-navbar: Navbar component for Bootstrap 3 using React */
// "use strict";

var Glyphicon = React.createClass({
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


var Navbar = {

    Logo: React.createClass({
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
    }),

    DropdownItem: React.createClass({

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
    }),

    Dropdown: React.createClass({

        getDefaultProps: function() {
            return {
                title: "Dropdown",
                glyphicon: null,
                children: []
            };
        },

        render: function() {
            items = this.props.children.map(function(item, i) {
                if (React.isValidElement(item))
                    /* Custom React element as Dropdown item */
                    return item;
                else {
                    item.key = i;
                    return React.createElement(Navbar.DropdownItem, item);
                }
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
    }),

    Link: React.createClass({

        getDefaultProps: function() {
            return {
                title: "Link",
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
    }),

    Nav: React.createClass({

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
                        return React.createElement(Navbar.Dropdown, menu);
                    }
                    else {
                        return React.createElement(Navbar.Link, menu);
                    }
                }
            });

            return (
                <ul className={'nav navbar-nav ' + this.props.position} key={this.props.key}>
                    {items}
                </ul>
            );
        }
    }),

    Header: React.createClass({

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
                        <Navbar.Logo src={this.props.logo} alt={this.props.alt} />
                        {this.props.brand}
                    </a>
                </div>
            );
        }
    }),


    Navbar: React.createClass({

        getDefaultProps: function() {
            return {
                header: {
                    brand: "Home"
                },
                children: []
            };
        },

        render: function() {

            header = React.createElement(Navbar.Header, this.props.header);

            items = this.props.children.map(function(navbar, i) {
                navbar.key = i;
                return React.createElement(Navbar.Nav, navbar);
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
    }),
};


