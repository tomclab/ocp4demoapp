package com.tomclab.api;

import java.util.Calendar;
import java.util.Date;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author airhacks.com
 */
@Path("sendsms")
public class SMSResource {

    @POST
    public String sendsms(String msg) {
    	Date today = Calendar.getInstance().getTime();
        return "Hola! You Send:<"+msg+"> on "+today;
    }

}