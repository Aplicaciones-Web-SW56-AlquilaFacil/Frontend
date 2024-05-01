<script>
import {defineComponent, ref} from "vue";
import NavbarContent from "./public/components/navbar-content.component.vue";
import CreateSpaceStartComponent from "./space/components/create-space-start.component.vue";
import CreateSpaceDescribeComponent from "./space/components/create-space-describe.component.vue";
import CreateSpaceDescribeOptionComponent from "./space/components/create-space-describe-option.component.vue";
import CreateSpaceTitleComponent from "./space/components/create-space-title.component.vue";
import CreateSpacePriceComponent from "./space/components/create-space-price.component.vue";
import CreateSpacePostComponent from "./space/components/create-space-post.component.vue";
import CreateSpaceAddPhotoComponent from "./space/components/create-space-add-photo.component.vue";
import CreateSpaceStandOutComponent from "./space/components/create-space-stand-out.component.vue";
import CreateSpaceFinishComponent from "./space/components/create-space-finish.component.vue";
import CreateSpaceConfirmDirectionComponent from "./space/components/create-space-confirm-direction.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default defineComponent({
  components: {FooterContent, CreateSpaceStartComponent, CreateSpaceDescribeComponent,
    CreateSpaceDescribeOptionComponent, CreateSpaceTitleComponent, CreateSpacePriceComponent, CreateSpacePostComponent,
    CreateSpaceAddPhotoComponent, CreateSpaceStandOutComponent, CreateSpaceFinishComponent, CreateSpaceConfirmDirectionComponent, NavbarContent}
})

const showCreateSpace = ref(false);

const handleShowCreateSpace = (value) => {
  showCreateSpace.value = value;
};
</script>

<template>
  <div>
    <navbar-content :showCreateSpace="showCreateSpace"
                      @update:showCreateSpace="handleShowCreateSpace"></navbar-content>
    <CreateSpacePriceComponent></CreateSpacePriceComponent>
  </div>
  <footer-content></footer-content>
</template>





