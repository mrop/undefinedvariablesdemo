package org.onehippo.components;

import java.util.Map;
import java.util.UUID;

/**
 * Created by mrop on 27/11/15.
 */
public class DefinedAttributes extends ReferencingStaticFieldsAndMethodsDemo {


    @Override
    protected Object getAttributeValue(final String s) {
        return UUID.randomUUID().toString();
    }
}
