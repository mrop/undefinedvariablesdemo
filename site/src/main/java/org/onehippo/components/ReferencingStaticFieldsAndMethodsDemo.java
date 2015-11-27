package org.onehippo.components;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.hippoecm.hst.component.support.bean.BaseHstComponent;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.request.ComponentConfiguration;

/**
 * Created by mrop on 27/11/15.
 */
public abstract class ReferencingStaticFieldsAndMethodsDemo extends BaseHstComponent {

    protected static final List<String> attributeList = new ArrayList<>();
    public static final int NUMBER_OF_ATTRIBUTES = 200;
    public static final String REQUEST_ATTRIBUTE = "requestAttribute";


    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) throws HstComponentException {
        super.doBeforeRender(request, response);
        Map<String, Object> requestAttributes = getRequestAttributes();
        for (String key : requestAttributes.keySet()) {
            request.setAttribute(key, requestAttributes.get(key));
        }
    }

    @Override
    public void init(final ServletContext servletContext, final ComponentConfiguration componentConfig) throws HstComponentException {
        super.init(servletContext, componentConfig);
        for (int i=0;i< NUMBER_OF_ATTRIBUTES;i++){
            attributeList.add(REQUEST_ATTRIBUTE +i);
        }

    }

    private Map<String,Object> getRequestAttributes(){
        Map<String,Object> result = new HashMap<>();
        for (String s : attributeList) {
            result.put(s,getAttributeValue(s));
        }
        return result;
    }

    protected abstract Object getAttributeValue(final String s);


}
