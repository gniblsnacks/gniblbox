<div class="modal-container" id="quote-modal">
  <div class="modal">
    <div class="modal-close modal-back">< BACK</div>
    <form id="quote-form" style="margin-top: 20px">
    <p style="text-align: center">We just need a bit of information from you to prepare your quote.</p>
    <input class="half" type="text" name="first_name" placeholder="First name" required>
    <input class="half" type="text" name="last_name" placeholder="Last name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="text" name="phone" placeholder="Work phone" required>
    <input type="text" name="company" placeholder="Company" required>
    <textarea name="description" rows="4" required placeholder="Tell us what you're looking for. How large is your company? How many snacks? How frequent would you like delivery?"></textarea>
    <input type="text" class="honeypot" style="position: absolute; left: -2000px" placeholder="Please leave this empty. Thanks!">
    <a class="btn btn-red" style="max-width: none" onclick="$('#quote-form').submit()"><span>Request your quote</span></a>
    <input type="submit" style="position: absolute; left: -2000px">
    </form>    
    <p style="display: none" class="quote-success">Great! We've received your request and will reach out to you shortly.</p>
    <p style="display: none" class="quote-error">Uh oh. Something went wrong. Please try again shortly.</p>
    <a class="modal-close modal-close-btn btn btn-green" style="max-width: none; display: none;"><span>Close window</span></a>
  </div>
</div>
