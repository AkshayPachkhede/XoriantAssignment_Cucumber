import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage() {
        return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView');
    }
}

export default new SecurePage();
