import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { Button, FontAwesome } from 'view/components';
import { siteUrls } from 'view/urls';

class Welcome extends Component {
  render() {
    const { gotoLogin } = this.props;
    return (
      <div className="Welcome">
        <div className="Welcome-Pane">
          <h2>welcome to mmdb lifebook</h2>
          <h4>go write your own stories</h4>
        </div>
        <div className="Welcome-Pane">
          <h2>login</h2>
          <Button className="Welcome-Login" onClick={gotoLogin}>
            <FontAwesome icon="sign-in" />login...
          </Button>
        </div>
        <div className="Welcome-Pane">
          <h3>background</h3>
          <p>
            an application born out of a conversation with the love of my life, to serve as a means for
            preserving and remembering life's very special moments as simply as possible.
          </p>

          <p>
            your lifebook is your life's book. at it's most basic, it should be considered a memory
            repository. at it's most utilized, your memories become shared moments. shared across the
            various aspects of your own life. shared amongst the many others' lifebooks you interact
            with every day.
          </p>
          <h4>aspects</h4>
          <p>
            consider these like a blog entry to your life. they can take many forms: a journal entry,
            sketches, photos, videos. they exist in a flat structure in your lifebook, but can be
            stitched together through your (and your companions') life aspects.
          </p>
          <h4>companions</h4>
          <p>
            consider these like epics or sagas to your life. some may live on forever, some may have
            just been phases. you can close aspects out and revive them later on. aspects can have
            aspects, and memories associated with an aspect are inherently associated with any and all
            parent aspects.
          </p>
          <h4>memories</h4>
          <p>
            consider these as those in your life that also maintain a lifebook. when you connect with
            companions, you open your life to them and can open your book to them as well. together, you
            can create shared memories, shared aspects, and shared lives.
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  gotoLogin: () => dispatch(push(siteUrls.auth().root()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
