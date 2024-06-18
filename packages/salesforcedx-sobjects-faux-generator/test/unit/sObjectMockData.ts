/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { DescribeSObjectResult } from '@jsforce/jsforce-node';
import { SObject } from '../../src/types';

// This is mock data of the raw response we get from SF's API
export const apiCustomSObject: DescribeSObjectResult = {
  actionOverrides: [],
  activateable: false,
  childRelationships: [
    {
      cascadeDelete: true,
      childSObject: 'ActivityHistory',
      deprecatedAndHidden: false,
      field: 'WhatId',
      junctionIdListNames: [],
      junctionReferenceTo: [],
      relationshipName: 'ActivityHistories',
      restrictedDelete: false
    },
    {
      cascadeDelete: true,
      childSObject: 'Test_Object__History',
      deprecatedAndHidden: false,
      field: 'ParentId',
      junctionIdListNames: [],
      junctionReferenceTo: [],
      relationshipName: 'Histories',
      restrictedDelete: false
    }
  ],
  compactLayoutable: true,
  createable: true,
  custom: true,
  customSetting: false,
  deepCloneable: false,
  deletable: true,
  deprecatedAndHidden: false,
  feedEnabled: false,
  fields: [
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 18,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: true,
      inlineHelpText: null,
      label: 'Record ID',
      length: 18,
      mask: null,
      maskType: null,
      name: 'Id',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'tns:ID',
      sortable: true,
      type: 'id',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 18,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: true,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Owner ID',
      length: 18,
      mask: null,
      maskType: null,
      name: 'OwnerId',
      nameField: false,
      namePointing: true,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: ['Group', 'User'],
      relationshipName: 'Owner',
      relationshipOrder: null,
      restrictedPicklist: false,
      restrictedDelete: false,
      scale: 0,
      soapType: 'tns:ID',
      sortable: true,
      type: 'reference',
      unique: false,
      updateable: true,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: false,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Deleted',
      length: 0,
      mask: null,
      maskType: null,
      name: 'IsDeleted',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:boolean',
      sortable: true,
      type: 'boolean',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: true,
      byteLength: 240,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: true,
      inlineHelpText: 'Please add a unique name',
      label: 'Test Object Name',
      length: 80,
      mask: null,
      maskType: null,
      name: 'Name',
      nameField: true,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:string',
      sortable: true,
      type: 'string',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Created Date',
      length: 0,
      mask: null,
      maskType: null,
      name: 'CreatedDate',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:dateTime',
      sortable: true,
      type: 'datetime',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 18,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Created By ID',
      length: 18,
      mask: null,
      maskType: null,
      name: 'CreatedById',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: ['User'],
      relationshipName: 'CreatedBy',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'tns:ID',
      sortable: true,
      type: 'reference',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Last Modified Date',
      length: 0,
      mask: null,
      maskType: null,
      name: 'LastModifiedDate',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:dateTime',
      sortable: true,
      type: 'datetime',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 18,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Last Modified By ID',
      length: 18,
      mask: null,
      maskType: null,
      name: 'LastModifiedById',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: ['User'],
      relationshipName: 'LastModifiedBy',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'tns:ID',
      sortable: true,
      type: 'reference',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: true,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'System Modstamp',
      length: 0,
      mask: null,
      maskType: null,
      name: 'SystemModstamp',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:dateTime',
      sortable: true,
      type: 'datetime',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Last Activity Date',
      length: 0,
      mask: null,
      maskType: null,
      name: 'LastActivityDate',
      nameField: false,
      namePointing: false,
      nillable: true,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:date',
      sortable: true,
      type: 'date',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Last Viewed Date',
      length: 0,
      mask: null,
      maskType: null,
      name: 'LastViewedDate',
      nameField: false,
      namePointing: false,
      nillable: true,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:dateTime',
      sortable: true,
      type: 'datetime',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 0,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: false,
      custom: false,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: false,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText: null,
      label: 'Last Referenced Date',
      length: 0,
      mask: null,
      maskType: null,
      name: 'LastReferencedDate',
      nameField: false,
      namePointing: false,
      nillable: true,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:dateTime',
      sortable: true,
      type: 'datetime',
      unique: false,
      updateable: false,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 300,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: true,
      custom: true,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: true,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: true,
      inlineHelpText: 'User field API name',
      label: 'Field API Name',
      length: 100,
      mask: null,
      maskType: null,
      name: 'Field_API_Name__c',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:string',
      sortable: true,
      type: 'string',
      unique: false,
      updateable: true,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 765,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: true,
      custom: true,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: false,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: false,
      inlineHelpText:
        'User field expected value. If using a regex you can test it ...',
      label: 'Field Value',
      length: 255,
      mask: null,
      maskType: null,
      name: 'Field_Value__c',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:string',
      sortable: true,
      type: 'string',
      unique: false,
      updateable: true,
      writeRequiresMasterRead: false
    },
    {
      aggregatable: true,
      autoNumber: false,
      byteLength: 120,
      calculated: false,
      calculatedFormula: null,
      cascadeDelete: false,
      caseSensitive: false,
      compoundFieldName: null,
      controllerName: null,
      createable: true,
      custom: true,
      defaultValue: null,
      defaultValueFormula: null,
      defaultedOnCreate: false,
      dependentPicklist: false,
      deprecatedAndHidden: false,
      digits: 0,
      displayLocationInDecimal: false,
      encrypted: false,
      externalId: true,
      extraTypeInfo: null,
      filterable: true,
      filteredLookupInfo: {},
      groupable: true,
      highScaleNumber: false,
      htmlFormatted: false,
      idLookup: true,
      inlineHelpText: 'Unique id for this rule.',
      label: 'Rule ID',
      length: 40,
      mask: null,
      maskType: null,
      name: 'RuleID__c',
      nameField: false,
      namePointing: false,
      nillable: false,
      permissionable: false,
      picklistValues: [],
      precision: 0,
      queryByDistance: false,
      referenceTargetField: {},
      referenceTo: [],
      relationshipName: '',
      relationshipOrder: null,
      restrictedDelete: false,
      restrictedPicklist: false,
      scale: 0,
      soapType: 'xsd:string',
      sortable: true,
      type: 'string',
      unique: true,
      updateable: true,
      writeRequiresMasterRead: false
    }
  ],
  hasSubtypes: false,
  idEnabled: false,
  isInterface: false,
  isSubtype: false,
  keyPrefix: 'a07',
  label: 'Test Object',
  labelPlural: 'Test Objects',
  layoutable: true,
  listviewable: false,
  lookupLayoutable: false,
  mergeable: false,
  mruEnabled: true,
  name: 'Test_Object__c',
  namedLayoutInfos: [],
  networkScopeFieldName: null,
  queryable: true,
  recordTypeInfos: [
    {
      // active: true,
      available: true,
      defaultRecordTypeMapping: true,
      master: true,
      name: 'Master',
      recordTypeId: '0120000000000xxxxx',
      urls: {
        layout:
          '/services/data/v46.0/sobjects/Test_Object__c/describe/layouts/0120000000000xxxxx'
      }
    }
  ],
  replicateable: true,
  retrieveable: true,
  searchLayoutable: true,
  searchable: true,
  supportedScopes: [
    {
      label: 'All assignment rules',
      name: 'everything'
    },
    {
      label: 'My assignment rules',
      name: 'mine'
    },
    {
      label: 'Queue owned assignment rules',
      name: 'queue_owned'
    },
    {
      label: "My team's assignment rules",
      name: 'team'
    },
    {
      label: 'User owned assignment rules',
      name: 'user_owned'
    }
  ],
  triggerable: true,
  undeletable: true,
  updateable: true,
  urls: {
    compactLayouts:
      '/services/data/v46.0/sobjects/Test_Object__c/describe/compactLayouts',
    rowTemplate: '/services/data/v46.0/sobjects/Test_Object__c/{ID}',
    approvalLayouts:
      '/services/data/v46.0/sobjects/Test_Object__c/describe/approvalLayouts',
    uiDetailTemplate: 'https://na96.salesforce.com/{ID}',
    uiEditTemplate: 'https://na96.salesforce.com/{ID}/e',
    defaultValues:
      '/services/data/v46.0/sobjects/Test_Object__c/defaultValues?recordTypeId&fields',
    describe: '/services/data/v46.0/sobjects/Test_Object__c/describe',
    uiNewRecord: 'https://na96.salesforce.com/a07/e',
    quickActions: '/services/data/v46.0/sobjects/Test_Object__c/quickActions',
    layouts: '/services/data/v46.0/sobjects/Test_Object__c/describe/layouts',
    sobject: '/services/data/v46.0/sobjects/Test_Object__c'
  }
};

// This is our internal minimal fields version (type SObject) of the same set of sobjects:
export const minimalCustomSObject: SObject = {
  childRelationships: [
    {
      cascadeDelete: true,
      childSObject: 'ActivityHistory',
      deprecatedAndHidden: false,
      field: 'WhatId',
      junctionIdListNames: [],
      junctionReferenceTo: [],
      relationshipName: 'ActivityHistories',
      restrictedDelete: false
    },
    {
      cascadeDelete: true,
      childSObject: 'Test_Object__History',
      deprecatedAndHidden: false,
      field: 'ParentId',
      junctionIdListNames: [],
      junctionReferenceTo: [],
      relationshipName: 'Histories',
      restrictedDelete: false
    }
  ],
  custom: true,
  fields: [
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Record ID',
      name: 'Id',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'id'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Owner ID',
      name: 'OwnerId',
      nillable: false,
      picklistValues: [],
      referenceTo: ['Group', 'User'],
      relationshipName: 'Owner',
      sortable: true,
      type: 'reference'
    },
    {
      aggregatable: false,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Deleted',
      name: 'IsDeleted',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'boolean'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: 'Please add a unique name',
      label: 'Test Object Name',
      name: 'Name',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'string'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: null,
      label: 'Created Date',
      name: 'CreatedDate',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'datetime'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Created By ID',
      name: 'CreatedById',
      nillable: false,
      picklistValues: [],
      referenceTo: ['User'],
      relationshipName: 'CreatedBy',
      sortable: true,
      type: 'reference'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: null,
      label: 'Last Modified Date',
      name: 'LastModifiedDate',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'datetime'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Last Modified By ID',
      name: 'LastModifiedById',
      nillable: false,
      picklistValues: [],
      referenceTo: ['User'],
      relationshipName: 'LastModifiedBy',
      sortable: true,
      type: 'reference'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: null,
      label: 'System Modstamp',
      name: 'SystemModstamp',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'datetime'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: null,
      label: 'Last Activity Date',
      name: 'LastActivityDate',
      nillable: true,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'date'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: null,
      label: 'Last Viewed Date',
      name: 'LastViewedDate',
      nillable: true,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'datetime'
    },
    {
      aggregatable: true,
      custom: false,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: false,
      inlineHelpText: null,
      label: 'Last Referenced Date',
      name: 'LastReferencedDate',
      nillable: true,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'datetime'
    },
    {
      aggregatable: true,
      custom: true,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: 'User field API name',
      label: 'Field API Name',
      name: 'Field_API_Name__c',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'string'
    },
    {
      aggregatable: true,
      custom: true,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText:
        'User field expected value. If using a regex you can test it ...',
      label: 'Field Value',
      name: 'Field_Value__c',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'string'
    },
    {
      aggregatable: true,
      custom: true,
      defaultValue: null,
      extraTypeInfo: null,
      filterable: true,
      groupable: true,
      inlineHelpText: 'Unique id for this rule.',
      label: 'Rule ID',
      name: 'RuleID__c',
      nillable: false,
      picklistValues: [],
      referenceTo: [],
      relationshipName: '',
      sortable: true,
      type: 'string'
    }
  ],
  label: 'Test Object',
  name: 'Test_Object__c',
  queryable: true
};
