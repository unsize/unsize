import React from 'react';
import { blue90, white, green } from 'style/constants';
const mailchimpdata = `
<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup {
    background:#fff;
    clear:left;
    font:18px 'Work Sans',Helvetica,Arial,sans-serif;
    width: 70%;
    margin: 0 auto;
  }
  #mc_embed_signup_scroll {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  #mc_embed_signup_scroll span {
    width: 40%;
  }
  #mc_embed_signup_scroll .mc-field-group {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    #mc_embed_signup_scroll {
      flex-direction: column;
      width: 100%;
    }
    #mc_embed_signup_scroll span {
      width: 100%;
      margin: 25px auto;
    }
  }
  @media (max-width: 768px) {
    #mc_embed_signup_scroll .mc-field-group {
      flex-direction: column;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    #mc_embed_signup_scroll .mc-field-group input.email {
      margin-bottom: 25px;
    }
  }
  #mc_embed_signup_scroll .mc-field-group input.email {
    width: 350px;
    margin-right: 20px;
  }
  #mc_embed_signup_scroll .mc-field-group button.button {
    position: relative;
    padding: 5px 15px;
    width: 150px;
    height: fit-content;
    font-size: 18px;
    font-family: 'Halis',Helvetica,sans-serif;
    font-weight: normal;
    border: none;
    outline: none;
    cursor: pointer;
    border: 2px solid #0B37F5;
    background: #ffffff;
    color: #0B37F5;
    border-radius: 0;
    background: rgba(11,55,245,0.9);
    color: #ffffff;
    display: inline;
    transition: 0.1s ease;
  }
  #mc_embed_signup_scroll .mc-field-group {
    overflow: visible;
  }
  #mc_embed_signup_scroll .mc-field-group button.button:hover {
    background-color: ${blue90};
    color: ${white};
  }
  #mc_embed_signup_scroll .mc-field-group button.button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${green};
    background-image: url('/static/images/button_boost.png');
    background-size: 200px;
    background-position: left;
    transform: translate(0px, 0px);
    transition: 0.1s ease;
    z-index: -1;
  }
  #mc_embed_signup_scroll .mc-field-group button.button:hover::after {
    transform: translate(8px, 8px);
  }
  #mc_embed_signup .mc-field-group label {
    display: none;
  }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://unsize.us15.list-manage.com/subscribe/post?u=64bbe374d80d26b9708073b09&amp;id=5388ba754c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<span>Subscribe to our mailing list</span>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">Subscribe</button>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_64bbe374d80d26b9708073b09_5388ba754c" tabindex="-1" value=""></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
`;

const MailChimp = () => {
  return <div dangerouslySetInnerHTML={{ __html: mailchimpdata }} />;
};

export default MailChimp;
